const {
  get,
  breakpoints,
  colors,
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  borderWidths,
  borderStyles,
  borders,
  radii,
  shadows,
  transitions,
  zIndices,
} = require('./getters');
const { theme } = require('./__test__/theme');

describe('getters', () => {
  describe('get()', () => {
    it('can get a key from an object', () => {
      expect(get(theme.colors, 'primary')).toEqual('blue');
    });

    it('can get a nested key from an object', () => {
      expect(get(theme.colors, 'palette.red.base')).toEqual('red');
    });

    it('can get a nested key with an index from an object', () => {
      expect(get(theme.colors, 'palette.gray.200')).toEqual('darkgray');
    });

    it('can get a key from an array by index', () => {
      expect(get(theme.space, 0)).toEqual(0);
    });

    it('can get a key from an array by name', () => {
      expect(get(theme.space, 'base')).toEqual(16);
    });

    it(`warns if a key wasn't found`, () => {
      const spy = jest.spyOn(console, 'warn');
      expect(get(theme.colors, 'palette.red.dark')).toEqual(undefined);
      expect(spy).toHaveBeenCalledWith(
        `[styled-suite] Got undefined for key 'palette.red.dark' in token:`,
        theme.colors,
      );
    });

    it('returns undefined and warns if the token is undefined', () => {
      const spy = jest.spyOn(console, 'warn');
      expect(get(null, 'nonexistent')).toEqual(undefined);
      expect(spy).toHaveBeenCalledWith(`[styled-suite] Got undefined for key 'nonexistent' in token:`, null);
    });

    it('returns the value with units if units are provided', () => {
      expect(get(theme.space, 'base', 'px')).toEqual('16px');
    });

    it(`doesn't apply the units if the key is undefined`, () => {
      const spy = jest.spyOn(console, 'warn');
      expect(get(theme.space, 'nonexistent', 'px')).toEqual(undefined);
      expect(spy).toHaveBeenCalledWith(`[styled-suite] Got undefined for key 'nonexistent' in token:`, theme.space);
    });
  });

  describe('breakpoints()', () => {
    it('can get a breakpoint', () => {
      expect(breakpoints('small')({ theme })).toEqual(theme.breakpoints.small);
    });
  });

  describe('colors()', () => {
    it('can get a color', () => {
      expect(colors('palette.gray.200')({ theme })).toEqual(theme.colors.palette.gray['200']);
    });
  });

  describe('space()', () => {
    it('can get a space', () => {
      expect(space('half')({ theme })).toEqual(`${theme.space.half}px`);
    });

    it('can have its units overriden', () => {
      expect(space('half')({ theme }, null)).toEqual(theme.space.half);
    });
  });

  describe('sizes()', () => {
    it('can get a size', () => {
      expect(sizes('medium')({ theme })).toEqual(`${theme.sizes.medium}px`);
    });

    it('can have its units overriden', () => {
      expect(sizes('medium')({ theme }, null)).toEqual(theme.sizes.medium);
    });
  });

  describe('fonts()', () => {
    it('can get a font', () => {
      expect(fonts('mono')({ theme })).toEqual(theme.fonts.mono);
    });
  });

  describe('fontSizes()', () => {
    it('can get a font-size', () => {
      expect(fontSizes('large')({ theme })).toEqual(`${theme.fontSizes.large}px`);
    });

    it('can have its units overriden', () => {
      expect(fontSizes('large')({ theme }, null)).toEqual(theme.fontSizes.large);
    });
  });

  describe('fontWeights()', () => {
    it('can get a font-weight', () => {
      expect(fontWeights('medium')({ theme })).toEqual(theme.fontWeights.medium);
    });
  });

  describe('lineHeights()', () => {
    it('can get a line-height', () => {
      expect(lineHeights('large')({ theme })).toEqual(`${theme.lineHeights.large}px`);
    });

    it('can have its units overriden', () => {
      expect(lineHeights('large')({ theme }, null)).toEqual(theme.lineHeights.large);
    });
  });

  describe('letterSpacings()', () => {
    it('can get a letter-spacing', () => {
      expect(letterSpacings('large')({ theme })).toEqual(`${theme.lineHeights.large}px`);
    });

    it('can have its units overriden', () => {
      expect(letterSpacings('large')({ theme }, null)).toEqual(theme.lineHeights.large);
    });
  });

  describe('borderWidths()', () => {
    it('can get a letter-spacing', () => {
      expect(borderWidths('large')({ theme })).toEqual(`${theme.borderWidths.large}px`);
    });

    it('can have its units overriden', () => {
      expect(borderWidths('large')({ theme }, null)).toEqual(theme.borderWidths.large);
    });
  });

  describe('borderStyles()', () => {
    it('can get a border style', () => {
      expect(borderStyles('dark')({ theme })).toEqual(theme.borderStyles.dark);
    });
  });

  describe('borders()', () => {
    it('can get a border', () => {
      expect(borders('light')({ theme })).toEqual(theme.borders.light);
    });
  });

  describe('radii()', () => {
    it('can get a border radius', () => {
      expect(radii('large')({ theme })).toEqual(`${theme.radii.large}px`);
    });

    it('can have its units overriden', () => {
      expect(radii('large')({ theme }, null)).toEqual(theme.radii.large);
    });
  });

  describe('shadows()', () => {
    it('can get a box-shadow', () => {
      expect(shadows(1)({ theme })).toEqual(theme.shadows[1]);
    });
  });

  describe('transitions()', () => {
    it('can get a transition', () => {
      expect(transitions('normal')({ theme })).toEqual(theme.transitions.normal);
    });
  });

  describe('zIndices()', () => {
    it('can get a transition', () => {
      expect(zIndices('menu')({ theme })).toEqual(theme.zIndices.menu);
    });
  });
});

export const breakpoints = {
  small: '(max-width: 36em)',
  medium: '(max-width: 48em)',
  large: '(max-width: 62em)',
};

const palette = {
  gray: {
    100: 'gray',
    200: 'darkgray',
  },
  red: {
    base: 'red',
  },
  blue: {
    base: 'blue',
  },
  neutral: {
    white: '#fff',
    black: '#000',
  },
};

const colors = {
  palette,
  primary: palette.blue.base,
  secondary: palette.red.base,
  text: {
    default: palette.neutral.black,
    subtle: palette.gray['200'],
    inverse: palette.neutral.white,
  },
};

const space = [0, 8, 16, 32];
space.none = space[0];
space.half = space[1];
space.base = space[2];
space.double = space[3];

const sizes = [0, 160, 320, 640];
sizes.small = sizes[1];
sizes.medium = sizes[2];
sizes.large = sizes[3];

const fonts = {
  base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `"SFMono-Regular", Menlo, Consolas, "Liberation Mono", Courier, monospace`,
};

const fontSizes = [0, 16, 24, 32];
fontSizes.base = fontSizes[1];
fontSizes.large = fontSizes[2];
fontSizes.larger = fontSizes[3];

const fontWeights = [300, 400, 500, 600, 700];
fontWeights.light = fontWeights[0];
fontWeights.normal = fontWeights[1];
fontWeights.medium = fontWeights[2];
fontWeights.semi = fontWeights[3];
fontWeights.bold = fontWeights[4];

const lineHeights = [0, 20, 24, 32];
lineHeights.small = lineHeights[1];
lineHeights.base = lineHeights[2];
lineHeights.large = lineHeights[3];

const letterSpacings = [0, 20, 24, 32];
letterSpacings.small = letterSpacings[1];
letterSpacings.base = letterSpacings[2];
letterSpacings.large = letterSpacings[3];

const borderWidths = [0, 2, 4];
borderWidths.base = borderWidths[1];
borderWidths.large = borderWidths[2];

const borderStyles = [`solid transparent`, `solid black`, `solid gray`];
borderStyles.dark = borderStyles[1];
borderStyles.light = borderStyles[2];

const borders = [`none`, `${borderWidths.base}px ${borderStyles.dark}`, `${borderWidths.base}px ${borderStyles.light}`];
borders.dark = borders[1];
borders.light = borders[2];

const radii = [0, 2, 4];
radii.base = radii[1];
radii.large = radii[2];

const shadows = [`0 0 0 transparent`, `0px 2px 4px #000`];

const transitions = [`0.3s ease-in-out`, `0.6s ease-in-out`, `0.9s ease-in-out`];
transitions.quick = transitions[0];
transitions.normal = transitions[1];
transitions.slow = transitions[2];

const zIndices = [0, 900];
zIndices.menu = zIndices[1];

export const theme = {
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
};

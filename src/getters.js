export const get = (token, keys, unit) => {
  const key = keys && keys.split ? keys.split('.') : [keys];

  let obj = token;

  for (let i = 0; i < key.length; i++) {
    obj = obj ? obj[key[i]] : undefined;
  }

  if (obj === undefined) {
    console.warn(`[styled-suite] Got undefined for key '${keys}' in token:`, token);
  }

  return unit && obj !== undefined ? `${obj}${unit}` : obj;
};

export const breakpoints = keys => ({ theme: { breakpoints } }) => get(breakpoints, keys);

export const colors = keys => ({ theme: { colors } }) => get(colors, keys);

export const space = keys => ({ theme: { space } }, units = 'px') => get(space, keys, units);

export const sizes = keys => ({ theme: { sizes } }, units = 'px') => get(sizes, keys, units);

export const fonts = keys => ({ theme: { fonts } }) => get(fonts, keys);

export const fontSizes = keys => ({ theme: { fontSizes } }, units = 'px') => get(fontSizes, keys, units);

export const fontWeights = keys => ({ theme: { fontWeights } }) => get(fontWeights, keys);

export const lineHeights = keys => ({ theme: { lineHeights } }, units = 'px') => get(lineHeights, keys, units);

export const letterSpacings = keys => ({ theme: { letterSpacings } }, units = 'px') => get(letterSpacings, keys, units);

export const borderWidths = keys => ({ theme: { borderWidths } }, units = 'px') => get(borderWidths, keys, units);

export const borderStyles = keys => ({ theme: { borderStyles } }) => get(borderStyles, keys);

export const borders = keys => ({ theme: { borders } }) => get(borders, keys);

export const radii = keys => ({ theme: { radii } }, units = 'px') => get(radii, keys, units);

export const shadows = keys => ({ theme: { shadows } }) => get(shadows, keys);

export const transitions = keys => ({ theme: { transitions } }) => get(transitions, keys);

export const zIndices = keys => ({ theme: { zIndices } }) => get(zIndices, keys);

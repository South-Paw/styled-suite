import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const h = level => `h${level}`;

const getHeadings = theme => (theme.styledSuite ? theme.styledSuite.headings : {});

const getStyle = (theme, level, key) => {
  const defaultStyles = getHeadings(theme)['default'];
  const headingStyles = getHeadings(theme)[h(level)];

  if (headingStyles) {
    return { ...defaultStyles, ...headingStyles }[key];
  }

  if (defaultStyles) {
    return defaultStyles[key];
  }

  return null;
};

const getHeaderStyles = props => {
  const { theme, color, extra, fontFamily, fontSize, fontStyle, fontWeight, level, lineHeight } = props;

  const sharedExtra = getStyle(theme, level, 'extra');

  return `
    color: ${color || getStyle(theme, level, 'color') || ''};
    font-family: ${fontFamily || getStyle(theme, level, 'fontFamily') || ''};
    font-size: ${fontSize || getStyle(theme, level, 'fontSize') || ''};
    font-style: ${fontStyle || getStyle(theme, level, 'fontStyle') || ''};
    font-weight: ${fontWeight || getStyle(theme, level, 'fontWeight') || ''};
    line-height: ${lineHeight || getStyle(theme, level, 'lineHeight') || ''};
    ${(typeof extra === 'function' ? extra(props) : extra) || ''}
    ${(typeof sharedExtra === 'function' ? sharedExtra(props) : sharedExtra) || ''}
  `;
};

const H1 = styled.h1`
  ${getHeaderStyles}
`;

const H2 = styled.h2`
  ${getHeaderStyles}
`;

const H3 = styled.h3`
  ${getHeaderStyles}
`;

const H4 = styled.h4`
  ${getHeaderStyles}
`;

const H5 = styled.h5`
  ${getHeaderStyles}
`;

const H6 = styled.h6`
  ${getHeaderStyles}
`;

const headings = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

const Heading = ({ color, extra, fontFamily, fontSize, fontStyle, fontWeight, level, lineHeight, ...other }) => {
  const StyledHeading = headings[h(level)];

  return (
    <StyledHeading
      color={color}
      extra={extra}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      level={level}
      lineHeight={lineHeight}
      {...other}
    />
  );
};

Heading.propTypes = {
  color: PropTypes.string,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  lineHeight: PropTypes.string,
};

Heading.defaultProps = {
  color: null,
  extra: null,
  fontFamily: null,
  fontSize: null,
  fontStyle: null,
  fontWeight: null,
  level: 1,
  lineHeight: null,
};

export { Heading };

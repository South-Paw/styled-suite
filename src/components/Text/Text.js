import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getText = theme => (theme.styledSuite ? theme.styledSuite.text : {});

const getStyle = (theme, key) => {
  const textStyles = getText(theme);
  return textStyles ? textStyles[key] : null;
};

const getTextStyle = props => {
  const { theme, color, extra, fontFamily, fontSize, fontStyle, fontWeight, lineHeight } = props;

  const sharedExtra = getStyle(theme, 'extra');

  return `
    color: ${color || getStyle(theme, 'color') || ''};
    font-family: ${fontFamily || getStyle(theme, 'fontFamily') || ''};
    font-size: ${fontSize || getStyle(theme, 'fontSize') || ''};
    font-style: ${fontStyle || getStyle(theme, 'fontStyle') || ''};
    font-weight: ${fontWeight || getStyle(theme, 'fontWeight') || ''};
    line-height: ${lineHeight || getStyle(theme, 'lineHeight') || ''};
    ${(typeof extra === 'function' ? extra(props) : extra) || ''}
    ${(typeof sharedExtra === 'function' ? sharedExtra(props) : sharedExtra) || ''}
  `;
};

const StyledText = styled.p`
  ${getTextStyle}
`;

const Text = ({ color, extra, fontFamily, fontSize, fontStyle, fontWeight, lineHeight, ...other }) => {
  return (
    <StyledText
      color={color}
      extra={extra}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...other}
    />
  );
};

Text.propTypes = {
  color: PropTypes.string,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  color: null,
  extra: null,
  fontFamily: null,
  fontSize: null,
  fontStyle: null,
  fontWeight: null,
  lineHeight: null,
};

export { Text };

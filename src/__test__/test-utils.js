import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const theme = {
  styledSuite: {
    headings: {
      default: {
        color: null,
        fontFamily: null,
        fontSize: null,
        fontStyle: null,
        fontWeight: '700',
        lineHeight: null,
        extra: null,
      },
      h1: { fontSize: `60px`, lineHeight: `64px` },
      h2: { fontSize: `50px`, lineHeight: `64px` },
      h3: { fontSize: `40px`, lineHeight: `64px` },
      h4: { fontSize: `30px`, lineHeight: `32px` },
      h5: { fontSize: `20px`, lineHeight: `32px` },
      h6: { fontSize: `10px`, lineHeight: `32px` },
    },
    text: {
      color: null,
      fontFamily: null,
      fontSize: '16px',
      fontStyle: null,
      fontWeight: null,
      lineHeight: '24px',
      extra: null,
    },
  },
};

const AllProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

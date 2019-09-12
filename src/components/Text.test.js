import React from 'react';
import { render, cleanup } from '../__test__/test-utils';

import { Text } from './Text';

describe('Text', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a p tag with the expected theme styles', () => {
    const text = 'Text';
    const { getByText } = render(<Text>{text}</Text>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('P');
    expect(values).toMatchObject({
      'font-size': '16px',
      'line-height': '24px',
    });
  });

  it('renders the component as a h1 with expected theme styles', () => {
    const text = 'Text as Heading';
    const { getByText } = render(<Text as="h1">{text}</Text>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H1');
    expect(values).toMatchObject({
      'font-size': '16px',
      'line-height': '24px',
    });
  });
});

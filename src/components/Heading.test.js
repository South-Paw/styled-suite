import React from 'react';
import { render, cleanup } from '../__test__/test-utils';

import { Heading } from './Heading';

describe('Heading', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a h1 heading with the expected theme styles', () => {
    const text = 'Heading 1';
    const { getByText } = render(<Heading>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H1');
    expect(values).toMatchObject({
      'font-size': '60px',
      'font-weight': '700',
      'line-height': '64px',
    });
  });

  it('renders a h2 heading with the expected theme styles', () => {
    const text = 'Heading 2';
    const { getByText } = render(<Heading level={2}>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H2');
    expect(values).toMatchObject({
      'font-size': '50px',
      'font-weight': '700',
      'line-height': '64px',
    });
  });

  it('renders a h3 heading with the expected theme styles', () => {
    const text = 'Heading 3';
    const { getByText } = render(<Heading level={3}>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H3');
    expect(values).toMatchObject({
      'font-size': '40px',
      'font-weight': '700',
      'line-height': '64px',
    });
  });

  it('renders a h4 heading with the expected theme styles', () => {
    const text = 'Heading 4';
    const { getByText } = render(<Heading level={4}>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H4');
    expect(values).toMatchObject({
      'font-size': '30px',
      'font-weight': '700',
      'line-height': '32px',
    });
  });

  it('renders a h5 heading with the expected theme styles', () => {
    const text = 'Heading 5';
    const { getByText } = render(<Heading level={5}>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H5');
    expect(values).toMatchObject({
      'font-size': '20px',
      'font-weight': '700',
      'line-height': '32px',
    });
  });

  it('renders a h6 heading with the expected theme styles', () => {
    const text = 'Heading 6';
    const { getByText } = render(<Heading level={6}>{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('H6');
    expect(values).toMatchObject({
      'font-size': '10px',
      'font-weight': '700',
      'line-height': '32px',
    });
  });

  it('renders the component as a span with expected theme styles', () => {
    const text = 'Heading as Span';
    const { getByText } = render(<Heading as="span">{text}</Heading>);
    const { _values: values } = window.getComputedStyle(getByText(text));

    expect(getByText(text).tagName).toBe('SPAN');
    expect(values).toMatchObject({
      'font-size': '60px',
      'font-weight': '700',
      'line-height': '64px',
    });
  });
});

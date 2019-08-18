import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading } from './index';

const { add } = storiesOf('styled-suite|Heading', module);

add('levels', () => (
  <>
    <Heading level={1}>h1. Header</Heading>
    <Heading level={2}>h2. Header</Heading>
    <Heading level={3}>h3. Header</Heading>
    <Heading level={4}>h4. Header</Heading>
    <Heading level={5}>h5. Header</Heading>
    <Heading level={6}>h6. Header</Heading>
    <hr />
    <Heading as="span" level={2}>
      h2 as span
    </Heading>
  </>
));

add('color', () => (
  <>
    <Heading color="#f44336">hex color</Heading>
    <Heading color="rgb(33, 150, 243)">rgb color</Heading>
    <Heading color="rgba(76, 175, 80, 0.87)">rgba color</Heading>
    <Heading color="rebeccapurple">named color</Heading>
  </>
));

add('fontWeight', () => (
  <>
    <Heading fontWeight="lighter">named font weight</Heading>
    <Heading fontWeight="300">number font weight</Heading>
  </>
));

add('fontSize', () => (
  <>
    <Heading fontSize="2rem">number (rem) font size</Heading>
    <Heading fontSize="32px">number (px) font size</Heading>
    <Heading fontSize="small">named (small) font size</Heading>
  </>
));

add('fontStyle', () => (
  <>
    <Heading fontStyle="normal">font style</Heading>
    <Heading fontStyle="italic">font style</Heading>
  </>
));

add('lineHeight', () => (
  <>
    <Heading lineHeight="3rem">number (rem) line height</Heading>
    <Heading lineHeight="48px">number (px) line height</Heading>
  </>
));

add('extra', () => (
  <>
    <Heading extra="margin: 20px;">extra styles</Heading>
  </>
));

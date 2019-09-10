import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from './Text';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor facilisis ornare. Fusce consectetur ornare risus, id sodales metus. Cras eget enim dignissim, bibendum diam eu, eleifend sapien. Quisque vel ligula purus. Nam a elementum ante. Pellentesque lacinia imperdiet tortor ut hendrerit.`;

const { add } = storiesOf('styled-suite|Text', module);

add('default', () => (
  <>
    <Text>{lorem}</Text>
    <Text as="div">Text as div</Text>
    <Text>
      using <strong>semantic</strong> tags <em>inside</em> of the <code>Text</code> component
    </Text>
    <Text as="a" href="//example.com">
      Text as anchor
    </Text>
  </>
));

add('color', () => (
  <>
    <Text color="#f44336">hex color</Text>
    <Text color="rgb(33, 150, 243)">rgb color</Text>
    <Text color="rgba(76, 175, 80, 0.87)">rgba color</Text>
    <Text color="rebeccapurple">named color</Text>
  </>
));

add('fontWeight', () => (
  <>
    <Text fontWeight="lighter">named font weight</Text>
    <Text fontWeight="300">number font weight</Text>
  </>
));

add('fontSize', () => (
  <>
    <Text fontSize="2rem">number (rem) font size</Text>
    <Text fontSize="32px">number (px) font size</Text>
    <Text fontSize="small">named (small) font size</Text>
  </>
));

add('fontStyle', () => (
  <>
    <Text fontStyle="normal">font style</Text>
    <Text fontStyle="italic">font style</Text>
  </>
));

add('lineHeight', () => (
  <>
    <Text lineHeight="3rem">number (rem) line height</Text>
    <Text lineHeight="48px">number (px) line height</Text>
  </>
));

add('extra', () => (
  <>
    <Text extra="margin: 20px;">extra styles</Text>
  </>
));

import React from 'react';
import { addDecorator, configure } from '@storybook/react';

addDecorator(storyFn => <>{storyFn()}</>);

const req = require.context('../src', true, /stories\.js$/);
configure(() => req.keys().forEach(filename => req(filename)), module);

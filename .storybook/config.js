import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { Router } from 'react-router-dom';

import history from '../src/services/history';
import GlobalStyle from '../src/styles/global';

import theme from './rsxpTheme'

const withGlobal = (Story) => (
  <Router history={history}>
    <Story />
    <GlobalStyle />
  </Router>
);

addParameters({
  options: {
    theme,
  }
})

addDecorator(withInfo({
  styles: {
    button: {
      base: {
        background: '#04D361',
        color: '#252729'
      }
    }
  }
}));
addDecorator(centered);
addDecorator(withGlobal);



// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

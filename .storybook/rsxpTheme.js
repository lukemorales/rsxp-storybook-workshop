import {create} from '@storybook/theming'
import logo from '../src/assets/images/logo/logo_rsxp.png'

export default create({
  base: 'dark',

  colorSecondary: '#7159c1',

  appBg: '#0b0a0d',
  appContentBg: '#16161A',
  appBorderColor: '#00f5ff',

  textColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#E6E6E6',
  barSelectedColor: '#ffffff',
  barBg: '#1b1a1f',

  brandTitle: 'RS/XP Storybook',
  brandUrl: 'https://rocketseat.com.br/experience',
  brandImage: logo,
})

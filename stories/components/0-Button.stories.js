import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../src/components/Button';

storiesOf('Components|Button', module)
  .add('with icon and text', () => (
    <Button icon="FaTwitter" type="button">
      This is a button with icon and text
    </Button>
  ))
  .add('with text', () => (
    <Button type="button">This is the default button</Button>
  ))
  .add('with custom color', () => (
    <Button color="#04D361" type="button">
      This is a button with custom color
    </Button>
  ))
  .add('large button', () => (
    <Button large type="button">
      This is a button with extra padding
    </Button>
  ))
  .add('secondary button', () => (
    <Button type="button" secondary>
      This is a secondary button
    </Button>
  ))
  .add('inline button', () => (
    <Button type="button" inline>
      This is an inline button that is similar to a link
    </Button>
  ));

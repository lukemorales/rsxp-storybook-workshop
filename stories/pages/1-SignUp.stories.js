import React from 'react';

import { storiesOf } from '@storybook/react';

import SignUp from '../../src/pages/SignUp';

storiesOf('Pages|SignUp', module)
  .addParameters({
    centered: {
      disable: true,
    },
    info: {
      disable: true,
    },
  })
  .add('default', () => <SignUp />);

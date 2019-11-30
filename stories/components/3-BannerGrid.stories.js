import React from 'react';

import { storiesOf } from '@storybook/react';

import BannerGrid from '../../src/components/BannerGrid';
import banners from '../../src/services/banners';

storiesOf('Components|BannerGrid', module)
  .add('default', () => <BannerGrid banners={banners} />, {
    info: {
      text:
        "This is a 4 banner grid, that can change it's layout with the presence of the props 'left', 'up' or 'down'.",
    },
  })
  .add('left layout', () => <BannerGrid left banners={banners} />)
  .add('up layout', () => <BannerGrid up banners={banners} />)
  .add('down layout', () => <BannerGrid down banners={banners} />);

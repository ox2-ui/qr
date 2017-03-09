import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Qr from './Qr';

storiesOf('Qr', module)
  .add('default', () => (
    <Qr
      value="My value"
    />
  ))
  .add('size 200', () => (
    <Qr
      size={200}
      value="My value"
    />
  ));

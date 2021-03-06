import React from 'react';
import { storiesOf } from '@storybook/react'; // tslint:disable-line:no-implicit-dependencies
import {
  object
// tslint:disable-next-line no-submodule-imports no-implicit-dependencies
} from '@storybook/addon-knobs/react';
import { Loading } from '../Loading';

const defaultStyle = {
  padding: 20
};

storiesOf('Loading', module)
  .add('basic usage', () => (
    <Loading style={object('style', defaultStyle)}/>
  ));

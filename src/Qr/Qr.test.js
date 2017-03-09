/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Qr from './Qr';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Qr
      value="My value"
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders size 200 correctly', () => {
  const wrapper = mount(
    <Qr
      size={200}
      value="My value"
    />
  );

  expect(wrapper).toMatchSnapshot();
});

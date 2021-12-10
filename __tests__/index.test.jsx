/* eslint-disable no-undef */
// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  expect, render, screen,
} from '@testing-library/react';
import Home from '../pages/index';
import ViewAll from '../pages/devices/view';
import MyApp from '../pages/_app';
import Pricing from '../pages/pricing';




describe('Home', () => {
  it('renders a heading', () => {
    render(
      // <MyApp>
        <Home />,
      // </MyApp>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Welcome Home',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a navigation bar', () => {
    render(<Home />);

    const navLink = screen.getByText('Log in');

    expect(navLink).toBeInTheDocument();
  });
});

describe('Devices', () => {
  it('renders Devices on load', () => {
    render(<ViewAll />);

    const columnHeader = screen.getByText('Device ID');

    expect(columnHeader).toBeInTheDocument();
  });
});

/* eslint-disable no-undef */
// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { useSession } from 'next-auth/react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';
import Layout from '../components/Layout';
import DeviceTable from '../components/DeviceTable';
import Pricing from '../pages/pricing';

describe('Home', () => {
  it('renders a logo', () => {
    useSession.mockReturnValueOnce([
      {
        user: {
          email: 'foo@bar.com',
        },
      },
      false,
    ]);
    render(<Home />);

    const logo = screen.getAllByRole('img', {
      name: 'alwaysAI Logo',
    });

    expect(logo[0]).toBeInTheDocument();
  });
});

describe('Layout', () => {
  it('renders correctly when signed out', () => {
    useSession.mockReturnValueOnce([false, false]);

    render(<Layout />);
    expect(screen.getByText('Log in'));
  });
});

describe('View Devices', () => {
  it('renders device table with data', () => {
    useSession.mockReturnValueOnce([
      {
        user: {
          email: 'foo@bar.com',
        },
      },
      false,
    ]);
    render(<DeviceTable />);

    const device = screen.getAllByRole('row', {
      name: 'ID Device name Location',
    });

    expect(device[0]).toBeInTheDocument();
  });
});

describe('Pricing', () => {
  it('renders pricing buttons', () => {
    useSession.mockReturnValue([false, false]);
    render(<Pricing />);

    const monthlyButton = screen.getByRole('button', {
      name: 'Monthly',
    });

    const yearlyButton = screen.getByRole('button', {
      name: 'Yearly',
    });

    expect(monthlyButton).toBeInTheDocument();
    expect(yearlyButton).toBeInTheDocument();
  });

  it('renders yearly pricing on click', () => {
    useSession.mockReturnValue([false, false]);
    render(<Pricing />);

    const yearlyButton = screen.getByRole('button', {
      name: 'Yearly',
    });

    const yearlyPricing = ['$1,068/yr', '$3,228/yr', '$5,988/yr'];

    fireEvent.click(yearlyButton);
    yearlyPricing.map((price) => expect(screen.getByText(price)));
  });

  it('re-renders monthly pricing after monthly is clicked', () => {
    useSession.mockReturnValue([false, false]);
    render(<Pricing />);
    const monthlyButton = screen.getByRole('button', {
      name: 'Monthly',
    });
    const yearlyButton = screen.getByRole('button', {
      name: 'Yearly',
    });

    const monthlyPricing = ['$1,188/yr', '$3,788/yr', '$7,188/yr'];

    fireEvent.click(yearlyButton);
    fireEvent.click(monthlyButton);

    monthlyPricing.map((price) => expect(screen.getByText(price)));
  });
});

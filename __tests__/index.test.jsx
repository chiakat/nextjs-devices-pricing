/* eslint-disable no-undef */
// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a logo', () => {
    render(<SessionProvider><Home /></SessionProvider>);

    const logo = screen.getAllByRole('img', {
      name: 'alwaysAI Logo',
    });

    expect(logo[0]).toBeInTheDocument();
  });
});

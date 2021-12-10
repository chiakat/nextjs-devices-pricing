// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a logo', () => {
    render(<Home />);

    const logo = screen.getAllByRole('img', {
      name: 'alwaysAI Logo',
    });

    expect(logo[0]).toBeInTheDocument();
  });
});

// __tests__/snapshot.js
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';
import { useSession } from 'next-auth/react';

it('renders homepage unchanged', () => {
  useSession.mockReturnValueOnce([
    {
      user: {
        email: 'foo@bar.com',
      },
    },
    false,
  ]);
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

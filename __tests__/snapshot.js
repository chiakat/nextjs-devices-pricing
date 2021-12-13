// __tests__/snapshot.js
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';
import { SessionProvider } from 'next-auth/react';


it('renders homepage unchanged', () => {
  const tree = renderer.create(<SessionProvider><Index /></SessionProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});

'use client'

import { Provider } from 'react-redux';
import { makeStore } from './lib/Store';

export const ReduxProviders = ({ children }) => {
  return (
    <Provider store={makeStore()} >
      {children}
    </Provider>
  );
};
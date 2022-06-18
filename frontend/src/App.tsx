// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import {
  createHttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '../styles/globals.css';

import Container from './Container';
import { IS_LOGGED_IN } from './store';

export interface AppProps {}

const container = document.getElementById('root');
const root = createRoot(container);

// Setup apollo client
const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URI });

// send auth header in all requests
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  },
}));

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

export const isLoggedInQuery = () => ({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});

// write cache data on initial load
cache.writeQuery(isLoggedInQuery());

// write cache data after cache is reset
client.onResetStore(() => Promise.resolve(cache.writeQuery(isLoggedInQuery())));

const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
        location.state,
      )}`,
    );
  }

  return children;
};

const App: FC<AppProps> = () => {
  return (
    <BrowserRouter basename='/notedly/'>
      <ApolloProvider client={client}>
        <DebugRouter>
          <Container />
        </DebugRouter>
      </ApolloProvider>
    </BrowserRouter>
  );
};

// document.addEventListener('DOMContentLoaded', () => {
//   // set theme
//   document.body.className = 'theme-bg theme-green';
// });

root.render(<App />);

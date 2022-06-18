// -*- mode: typescript-tsx; -*-
import { gql } from '@apollo/client';

// export const loggedInVar = makeVar(false);

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

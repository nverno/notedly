import React, { FC } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import { CreateUserDto, IS_LOGGED_IN } from '../../store';
import { useNavigate } from 'react-router';
import { UserForm } from '..';

const SIGNUP_USER = gql`
  mutation signUp($userData: CreateUserDto!) {
    signUp(userData: $userData)
  }
`;

export interface SignUpPageProps {}

export const SignUpPage: FC<SignUpPageProps> = (_props) => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const [signUp, { loading, error }] = useMutation<
    {
      signUp: string;
    },
    {
      userData: CreateUserDto;
    }
  >(SIGNUP_USER, {
    onCompleted: (data) => {
      client.cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      });
      localStorage.setItem('token', data.signUp);
      navigate('/');
    },
  });

  React.useEffect(() => {
    document.title = 'Sign Up - Notedly';
  }, []);

  return (
    <>
      <UserForm formType='signup' onFinish={signUp} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
};

export default SignUpPage;

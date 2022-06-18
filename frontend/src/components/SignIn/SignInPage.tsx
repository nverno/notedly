import React, { FC } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import { CreateUserDto, IS_LOGGED_IN } from '../../store';
import { useNavigate } from 'react-router';
import { UserForm } from '..';

const SIGNIN_USER = gql`
  mutation signIn($userData: LoginUserDto!) {
    signIn(userData: $userData)
  }
`;

export interface SignInPageProps {}

export const SignInPage: FC<SignInPageProps> = (_props) => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation<
    {
      signIn: string;
    },
    {
      userData: CreateUserDto;
    }
  >(SIGNIN_USER, {
    onCompleted: (data) => {
      client.cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: true,
        },
      });
      localStorage.setItem('token', data.signIn);
      navigate('/');
    },
  });

  React.useEffect(() => {
    document.title = 'Sign In - Notedly';
  }, []);

  return (
    <>
      <UserForm formType='signin' onFinish={signIn} />
      <div className='m-[auto] flex justify-center mt-2'>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>Error: {error.message}</p>}
      </div>
    </>
  );
};

export default SignInPage;

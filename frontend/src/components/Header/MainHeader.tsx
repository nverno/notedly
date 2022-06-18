import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import logo from './logo.svg?url';
import { IS_LOGGED_IN } from '../../store';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonAsLink } from '..';

export interface MainHeaderProps {}

export const MainHeader: FC<MainHeaderProps> = (_props) => {
  const { data, client } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();
  return (
    <header className='main-header'>
      <img src={logo} alt='Notedly Logo' className='inline-svg' />
      <h1 className='logo-text'>Notedly</h1>

      <div className='user-state'>
        {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              localStorage.removeItem('token');
              // clear application cache
              client.resetStore();
              // update local state
              client.writeQuery({
                query: IS_LOGGED_IN,
                data: { isLoggedIn: false },
              });
              navigate('/');
            }}
          >
            Log Out
          </ButtonAsLink>
        ) : (
          <p>
            <Link to={'/signin'}>Sign In</Link> or{' '}
            <Link to={'/signup'}>Sign Up</Link>
          </p>
        )}
      </div>
    </header>
  );
};

export default MainHeader;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export interface MainNavProps {}

export const MainNav: FC<MainNavProps> = (_props) => {
  return (
    <nav className='main-nav'>
      <ul className='main-navlist items-center'>
        <li>
          <Link to='/'>
            <div className='inline-block flex justify-center items-center'>
              <span
                // className='material-symbols-outlined'
                aria-hidden='true'
                role='img'
              >
                🏠
                {/* home */}
              </span>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link to='/mynotes'>
            <span aria-hidden='true' role='img'>
              📓
            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            <span aria-hidden='true' role='img'>
              🌟
            </span>
            Favorites
          </Link>
        </li>
        <li>
          <Link to='/new'>
            <span aria-hidden='true' role='img'>
              ➕
            </span>
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

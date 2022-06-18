import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { MainHeader, MainNav } from '..';

export interface DefaultLayoutProps {}

export const DefaultLayout: FC<DefaultLayoutProps> = (_props) => {
  return (
    <>
      <MainHeader />
      <div className='default-layout'>
        <MainNav />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DefaultLayout;

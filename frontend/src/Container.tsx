import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import {
  DefaultLayout,
  HomePage,
  MyNotesPage,
  FavoritesPage,
  NotePage,
  SignUpPage,
  SignInPage,
  NewNotePage,
  EditNotePage,
} from './components';
import { IS_LOGGED_IN } from './store';

export interface ContainerProps {}

const Container: FC<ContainerProps> = (_props) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  const location = useLocation();
  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  const displayLoggedIn = () => (
    <>
      <Route path='/mynotes' element={<MyNotesPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/new' element={<NewNotePage />} />
      <Route path='/notes/:noteId/edit' element={<EditNotePage />} />
      <Route
        path='*'
        element={<Navigate to='/' replace state={{ from: location }} />}
      />
    </>
  );

  const displayLoggedOut = () => (
    <>
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route
        path='*'
        element={<Navigate to='/signin' replace state={{ from: location }} />}
      />
    </>
  );

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/notes/:noteId' element={<NotePage />} />
        {data.isLoggedIn ? displayLoggedIn() : displayLoggedOut()}
      </Route>
    </Routes>
  );
};

export default Container;

import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_FAVORITES } from '../../store';
import { NoteList } from '../NoteList';

export interface FavoritesPageProps {}

export const FavoritesPage: FC<FavoritesPageProps> = (_props) => {
  const { data, loading, error } = useQuery(GET_MY_FAVORITES);

  React.useEffect(() => {
    document.title = 'Favorites - Notedly';
  }, []);

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  const favorites = data.currentUser.favorites;
  if (favorites.length !== 0) return <NoteList notes={favorites} />;

  return <p>No favorites yet</p>;
};

export default FavoritesPage;

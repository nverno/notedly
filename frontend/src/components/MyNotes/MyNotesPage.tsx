import React, { FC } from 'react';
import { NoteList } from '../NoteList';
import { useQuery } from '@apollo/client';
import { GET_MY_NOTES } from '../../store';

export interface MyNotesPageProps {}

export const MyNotesPage: FC<MyNotesPageProps> = (_props) => {
  const { data, loading, error } = useQuery(GET_MY_NOTES);

  React.useEffect(() => {
    document.title = 'My Notes - Notedly';
  }, []);

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;
  const notes = data.currentUser.notes;
  if (notes.length !== 0) return <NoteList notes={notes} />;

  return <p>No notes yet</p>;
};

export default MyNotesPage;

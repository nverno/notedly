import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_NOTE } from '../../store';
import NoteItem from '../NoteList/NoteItem';

export interface NotePageProps {}

export const NotePage: FC<NotePageProps> = (_props) => {
  const { noteId } = useParams<{ noteId: string }>();
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { noteId } });

  if (!data || loading) return null;
  if (error) return <p>Error! Note not found</p>;

  return <NoteItem note={data.note} />;
};

export default NotePage;

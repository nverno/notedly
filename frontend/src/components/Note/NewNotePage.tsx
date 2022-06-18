import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import { CreateNoteDto, Note, NEW_NOTE, GET_NOTES, GET_MY_NOTES } from '../../store';
import NoteForm from './NoteForm';
import { useNavigate } from 'react-router';

export interface NewNotePageProps {}

export const NewNotePage: FC<NewNotePageProps> = (_props) => {
  const navigate = useNavigate();
  const [createNote, { loading, error }] = useMutation<
    { createNote: Note },
    CreateNoteDto
  >(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: (data) => {
      // redirect to new note page
      navigate(`/notes/${data.createNote._id}`);
    },
  });

  React.useEffect(() => {
    document.title = 'New Note - Notedly';
  }, []);

  return (
    <>
      <NoteForm onFinish={createNote} />
      <div className='m-[auto] flex justify-center mt-2'>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>Error: {error.message}</p>}
      </div>
    </>
  );
};

export default NewNotePage;

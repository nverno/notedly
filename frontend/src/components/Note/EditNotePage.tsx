import React, { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router';
import { User, Note, GET_NOTE, GET_ME, EDIT_NOTE } from '../../store';
import NoteForm from './NoteForm';

export interface EditNotePageProps {}

export const EditNotePage: FC<EditNotePageProps> = (_props) => {
  const { noteId } = useParams<{ noteId: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<{ note: Note }>(GET_NOTE, {
    variables: { noteId },
  });
  const { data: userData, loading: loadingUser } = useQuery<{
    currentUser: Partial<User>;
  }>(GET_ME);

  const [updateNote, { loading: loadingUpdated, error: errorUpdated }] = useMutation(
    EDIT_NOTE,
    {
      variables: { noteData: { noteId } },
      // refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
      onCompleted: () => navigate(`/notes/${noteId}`),
    },
  );

  React.useEffect(() => {
    document.title = 'Edit Note - Notedly';
  }, []);

  if (loading || loadingUser) return null;
  if (error) return <p>Error Note not found: {error.message}</p>;
  if (userData.currentUser._id !== data.note.author._id)
    return <p>You do not have access to edit this note</p>;

  return (
    <>
      <NoteForm
        onFinish={updateNote}
        data={{ noteId, content: data.note.content }}
      />
      <div className='m-[auto] flex justify-center mt-2'>
        {loadingUpdated && <p>Loading...</p>}
        {errorUpdated && (
          <p className='text-red-500'>Error: {errorUpdated.message}</p>
        )}
      </div>
    </>
  );
};

export default EditNotePage;

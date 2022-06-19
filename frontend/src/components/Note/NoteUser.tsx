import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../../store';
import { GET_ME } from '../../store/queries';
import { DeleteNoteButton } from '../Button';
import FavoriteNote from './FavoriteNote';

export interface NoteUserProps {
  note: Note;
}

const NoteUser: FC<NoteUserProps> = (props) => {
  const { note } = props;
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <React.Fragment>
      <FavoriteNote
        noteId={note._id}
        me={data.currentUser}
        favoriteCount={note.favoriteCount}
      />
      {/* <span>Favorites: {note.favoriteCount}</span> */}
      <br />
      {data.currentUser._id === note.author._id && (
        <>
          <Link className='button-link' to={`/notes/${note._id}/edit`}>
            Edit
          </Link>
          <br />
          <DeleteNoteButton noteId={note._id} />
        </>
      )}
    </React.Fragment>
  );
};

export default NoteUser;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../../store';
import NoteItem from './NoteItem';

export interface NoteListProps {
  notes: Note[];
}

export const NoteList: FC<NoteListProps> = (props) => {
  const { notes } = props;

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} className='note-wrapper'>
          <NoteItem className='mb-2' note={note} />
          <Link className='button-link' to={`/notes/${note._id}`}>
            Permalink
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../../store';

export interface NoteUserProps {
  note: Note;
}

const NoteUser: FC<NoteUserProps> = (props) => {
  const { note } = props;
  return <Link to={`/notes/${note._id}/edit`}>Edit</Link>;
};

export default NoteUser;

import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import ButtonAsLink from './ButtonAsLink';
import { DELETE_NOTE } from '../../store/mutations';
import { GET_MY_NOTES, GET_NOTES } from '../../store/queries';
import { useNavigate } from 'react-router';

export interface DeleteNoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  noteId: string;
}

export const DeleteNoteButton: FC<DeleteNoteButtonProps> = (props) => {
  const { noteId, ...buttonProps } = props;
  const navigate = useNavigate();

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { noteId },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: () => {
      navigate(`/mynotes`);
    },
  });

  return (
    <ButtonAsLink {...buttonProps} onClick={() => deleteNote()}>
      Delete
    </ButtonAsLink>
  );
};

export default DeleteNoteButton;

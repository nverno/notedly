// -*- mode: typescript-tsx; -*-

import { gql } from '@apollo/client';

export const NEW_NOTE = gql`
  mutation createNote($noteData: CreateNoteDto!) {
    createNote(noteData: $noteData) {
      _id
      content
      createdAt
      favoriteCount
      favoritedBy {
        _id
        username
      }
      author {
        _id
        username
      }
    }
  }
`;

export const EDIT_NOTE = gql`
  mutation updateNote($noteData: UpdateNoteDto!) {
    updateNote(noteData: $noteData) {
      _id
      content
      createdAt
      favoriteCount
      favoritedBy {
        _id
        username
      }
      author {
        _id
        username
      }
    }
  }
`;

/* -*- mode: typescript-tsx; -*- */
import { gql } from '@apollo/client';

export const GET_NOTE = gql`
  query GetNoteById($noteId: String!) {
    note(noteId: $noteId) {
      _id
      content
      author {
        _id
        username
        avatar
      }
      favoriteCount
      updatedAt
      createdAt
    }
  }
`;

export const GET_NOTES = gql`
  query NoteFeed($feedData: NoteFeedDto) {
    noteFeed(feedData: $feedData) {
      cursor
      hasNextPage
      notes {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_MY_NOTES = gql`
  query CurrentUser {
    currentUser {
      _id
      username
      notes {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_MY_FAVORITES = gql`
  query CurrentUser {
    currentUser {
      _id
      username
      favorites {
        _id
        createdAt
        content
        favoriteCount
        author {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query CurrentUser {
    currentUser {
      _id
      favorites {
        _id
      }
    }
  }
`;

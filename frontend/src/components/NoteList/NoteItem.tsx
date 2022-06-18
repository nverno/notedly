import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { IS_LOGGED_IN, Note } from '../../store';
import { useQuery } from '@apollo/client';
import NoteUser from '../Note/NoteUser';

export interface NoteItemProps {
  note: Note;
}

const NoteItem: FC<NoteItemProps> = (props) => {
  const { note } = props;
  const { data, loading, error } = useQuery(IS_LOGGED_IN);

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <article className='note'>
      <div className='metadata mb-3'>
        <div className='pr-4'>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            style={{ height: '50px' }}
          />
        </div>
        <div className='pr-4'>
          <div>
            <span className='italic'>by</span> {note.author.username}
          </div>
          <div>{moment(note.createdAt).fromNow()}</div>
        </div>
        <div className='ml-[auto]'>
          {data.isLoggedIn ? (
            <NoteUser note={note} />
          ) : (
            <>
              <em>Favorites:</em> {note.favoriteCount}
            </>
          )}
        </div>
      </div>

      <ReactMarkdown children={note.content} />
    </article>
  );
};

export default NoteItem;

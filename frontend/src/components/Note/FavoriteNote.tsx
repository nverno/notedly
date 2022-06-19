import { useMutation } from '@apollo/client';
import React, { FC } from 'react';
import { User } from '../../store';
import { TOGGLE_FAVORITE } from '../../store/mutations';
import { GET_ME, GET_MY_FAVORITES } from '../../store/queries';
import { ButtonAsLink } from '../Button';

export interface FavoriteNoteProps {
  noteId: string;
  favoriteCount: number;
  me: User;
}

const FavoriteNote: FC<FavoriteNoteProps> = (props) => {
  const { noteId, favoriteCount, me } = props;
  const [count, setCount] = React.useState(favoriteCount);
  const [favorited, setFavorited] = React.useState(
    me.favorites.find((note) => note._id === noteId) !== undefined,
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { noteId },
    refetchQueries: [{ query: GET_MY_FAVORITES }, { query: GET_ME }],
  });

  return (
    <>
      <ButtonAsLink
        onClick={() => {
          setFavorited(!favorited);
          toggleFavorite();
        }}
      >
        {favorited ? 'Remove favorite' : 'Add favorite'}
      </ButtonAsLink>
    </>
  );
};

export default FavoriteNote;

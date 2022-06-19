import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { NoteList } from '..';
import { GET_NOTES, NoteFeed as INoteFeed } from '../../store';

export interface HomePageProps {}

export const HomePage: FC<HomePageProps> = (_props) => {
  const [limit, setLimit] = React.useState(2);
  const { data, loading, error, fetchMore } = useQuery<{ noteFeed: INoteFeed }>(
    GET_NOTES,
    {
      variables: { feedData: { limit } },
    },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching notes</p>;
  const notes = data.noteFeed.notes;

  return (
    <div className='w-100'>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className='m-[auto] flex justify-end items-center mb-3'>
        <span className='mr-3'>Limit: {limit}</span>
        <div className='display-block w-[28px] border-[1px]'>
          <button
            className='w-full border-b-[1px]'
            onClick={() => setLimit(limit + 1)}
          >
            <span className='material-symbols-outlined text-[16px]'>
              expand_less
            </span>
          </button>
          <button
            className='w-full'
            onClick={() => setLimit(Math.max(1, limit - 1))}
          >
            <span className='material-symbols-outlined text-[16px]'>
              expand_more
            </span>
          </button>
        </div>
      </div>

      <NoteList notes={notes} />
      {data.noteFeed.hasNextPage && (
        <button
          className='button m-[auto] rounded-md'
          onClick={() =>
            fetchMore({
              variables: {
                feedData: {
                  cursor: data.noteFeed.cursor,
                  limit,
                },
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    /* combine the new results and the old */
                    notes: [
                      ...previousResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes,
                    ],
                    __typename: 'noteFeed',
                  },
                };
              },
            })
          }
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;

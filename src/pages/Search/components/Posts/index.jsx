import { useSuspenseQuery } from '@tanstack/react-query';

import { getSearchs } from '@apis';

import Path from '@utils/Path.js';
import { Post } from '@components';

import { QUERY_KEY } from '@constants';

export default function Posts({ keyword }) {
  const { data: results } = useSuspenseQuery({
    queryKey: [QUERY_KEY.search, keyword],
    queryFn: () => getSearchs({ searchWord: keyword }),
    placeholderData: [],
    enabled: !!keyword,
  });

  return (
    <ul>
      {results.map((post) => (
        <Post
          key={post.postId}
          post={post}
          to={Path.getPostPath({
            postId: post.postId,
            boardId: post.boardId,
          })}
        />
      ))}
    </ul>
  );
}

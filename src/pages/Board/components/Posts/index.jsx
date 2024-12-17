import { useLocation } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getPosts } from '@apis';

import { Post } from '@components';

import Path from '@utils/Path.js';
import { QUERY_KEY } from '@constants';

export default function Posts({ board }) {
  const { id, name: boardName } = board;
  const postType = boardName.split(' ').join('_').toUpperCase();

  const { data: posts } = useSuspenseQuery({
    queryKey: [QUERY_KEY.posts, postType],
    queryFn: async () => await getPosts({ postType }),
    gcTime: 1000 * 60 * 5,
  });

  return (
    <ul>
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          to={Path.getPostPath({
            postId: post.postId,
            boardId: id,
          })}
        />
      ))}
    </ul>
  );
}

import { useLocation } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { mypageList } from '@apis';

import { Post } from '@components';

import Path from '@utils/Path.js';
import { QUERY_KEY } from '@constants';

export default function Posts() {
  const { pathname } = useLocation();

  const { data: posts } = useSuspenseQuery({
    queryKey: [QUERY_KEY.mypageList, pathname],
    queryFn: async () => await mypageList({ pathname }),
  });

  return (
    <ul>
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          to={Path.getPostPath({ postId: post.postId })}
        />
      ))}
    </ul>
  );
}

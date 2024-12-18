import { useSuspenseQuery } from '@tanstack/react-query';

import { getMyPosts } from '@apis';

import { Post } from '@components';
import Path from '@utils/Path.js';
import { PATH, QUERY_KEY } from '@constants';

export default function MyPosts() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.myPosts],
    queryFn: getMyPosts,
  });

  const posts = data.slice(0, 5);

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          to={Path.getPostPath({ postId: post.postId })}
        />
      ))}
    </>
  );
}

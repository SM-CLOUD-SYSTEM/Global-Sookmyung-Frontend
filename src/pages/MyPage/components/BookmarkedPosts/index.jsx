import { useSuspenseQuery } from '@tanstack/react-query';

import { getBookmarkedPosts } from '@apis';

import { Post } from '@components';

import { PATH, QUERY_KEY } from '@constants';

export default function BookmarkedPosts() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.bookmarkedPosts],
    queryFn: getBookmarkedPosts,
  });

  const posts = data.slice(0, 5);

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          to={Path.getPostPath({
            postId: post.postId,
            boardId: post.boardId,
          })}
        />
      ))}
    </>
  );
}

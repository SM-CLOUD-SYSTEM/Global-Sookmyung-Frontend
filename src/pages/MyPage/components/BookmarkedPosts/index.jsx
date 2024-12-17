import { useSuspenseQuery } from '@tanstack/react-query';

import { getBookmarkedPosts } from '@apis';

import { Post } from '@components';
import { Group } from '@pages/MyPage/components';
import Path from '@utils/Path';
import { PATH, QUERY_KEY } from '@constants';

export default function BookmarkedPosts() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.bookmarkedPosts],
    queryFn: async () => await getBookmarkedPosts(),
  });

  const posts = data.length > 5 ? data.slice(0, 5) : data;

  return (
    <Group
      title='즐겨찾기한 글'
      to={{
        path: PATH.bookmark,
        label: '전체보기',
      }}
    >
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
    </Group>
  );
}

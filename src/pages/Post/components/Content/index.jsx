import { useParams, useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getPost } from '@apis';
import { PostHeader, BookmarkButton, LikeButton } from '@pages/Post/components';
import { QUERY_KEY } from '@constants';

import styles from './Content.module.css';

export default function Content() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data: post } = useSuspenseQuery({
    queryKey: [QUERY_KEY.post, postId],
    queryFn: async () => await getPost({ postId }),
  });

  const {
    content,
    isLiked,
    likeCount,
    isBookmarked,
    bookmarkCount,
    commentCount,
  } = post;

  return (
    <div className={styles.top}>
      <PostHeader post={post} />
      <p className={styles.content}>{content}</p>
      <div className={styles.buttons}>
        <LikeButton liked={isLiked} count={likeCount} />
        <BookmarkButton bookmarked={isBookmarked} count={bookmarkCount} />
      </div>
    </div>
  );
}

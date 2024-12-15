import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { usePost } from '@hooks';

import { Profile } from '@components';
import {
  BoardNavigationHeader,
  BookmarkButton,
  Comments,
  CommentInput,
  LikeButton,
  PostHeader,
} from '@pages/Post/components';

import { QUERY_KEY } from '@constants';
import { POST } from '@dummy';

import styles from './Post.module.css';

const { likeCount, bookmarkCount, commentCount } = POST;

export default function Post() {
  const { postId, isPending } = useParams();
  const { getPost } = usePost();
  const { data: post } = useQuery({
    queryKey: [QUERY_KEY.post, postId],
    queryFn: getPost,
  });

  if (isPending || post === undefined) {
    return null;
  }

  const { content, isLiked, likeCount, isBookmarked, bookmarkCount } = post;

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
        <section className={styles.wrapper}>
          <div className={styles.top}>
            <PostHeader post={post} />
            <p className={styles.content}>{content}</p>
            <div className={styles.buttons}>
              <LikeButton liked={isLiked} count={likeCount} />
              <BookmarkButton bookmarked={isBookmarked} count={bookmarkCount} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.input}>
              <p className={styles.commentLabel}>
                댓글 <span className={styles.commentCount}>{commentCount}</span>
              </p>
              <CommentInput />
            </div>
            <Comments />
          </div>
        </section>
      </article>
    </section>
  );
}

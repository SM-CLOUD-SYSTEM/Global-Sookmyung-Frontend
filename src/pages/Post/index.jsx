import { Profile } from '@components';
import {
  BoardNavigationHeader,
  BookmarkButton,
  Comments,
  CommentInput,
  LikeButton,
  PostHeader,
} from '@pages/Post/components';

import { POST } from '@dummy';

import styles from './Post.module.css';

const { likeCount, bookmarkCount, commentCount } = POST;

export default function Post() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
        <section className={styles.wrapper}>
          <div className={styles.top}>
            <PostHeader post={POST} />
            <p className={styles.content}>{POST.content}</p>
            <div className={styles.buttons}>
              <LikeButton count={likeCount} />
              <BookmarkButton count={bookmarkCount} />
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

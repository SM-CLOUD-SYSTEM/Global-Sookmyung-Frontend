import { Profile } from '@components';
import BoardNavigationHeader from '@pages/Post/components/BoardNavigationHeader';
import PostHeader from '@pages/Post/components/PostHeader';
import LikeButton from '@pages/Post/components/LikeButton';
import BookmarkButton from '@pages/Post/components/BookmarkButton';

import { POST } from '@dummy';

import styles from './Post.module.css';

const { likeCount, bookmarkCount } = POST;

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
          <div className={styles.bottom}></div>
        </section>
      </article>
    </section>
  );
}

import { Profile } from '@components';
import BoardNavigationHeader from '@pages/Post/components/BoardNavigationHeader';
import PostHeader from '@pages/Post/components/PostHeader';

import styles from './Post.module.css';

const title = '게시글제목';
const profileImage = undefined;
const nickname = '흑백요리사';
const date = '2024.11.20';
const likeCount = 100;
const bookmarkCount = 100;
const post = {
  title,
  profileImage,
  nickname,
  date,
  likeCount,
  bookmarkCount,
};

export default function Post() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
        <div className={styles.wrapper}>
          <PostHeader post={post} />
        </div>
      </article>
    </section>
  );
}

import { Profile } from '@components';
import BoardNavigationHeader from '@pages/Post/components/BoardNavigationHeader';
import PostHeader from '@pages/Post/components/PostHeader';
import { POST } from '@dummy';

import styles from './Post.module.css';

export default function Post() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
        <div className={styles.wrapper}>
          <PostHeader post={POST} />
        </div>
      </article>
    </section>
  );
}

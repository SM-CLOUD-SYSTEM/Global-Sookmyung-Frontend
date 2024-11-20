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
        <section className={styles.wrapper}>
          <div className={styles.top}>
            <PostHeader post={POST} />
            <p className={styles.content}>{POST.content}</p>
          </div>
          <div className={styles.bottom}></div>
        </section>
      </article>
    </section>
  );
}

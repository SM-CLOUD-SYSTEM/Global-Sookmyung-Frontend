import { Profile } from '@components';
import BoardNavigationHeader from '@pages/Post/components/BoardNavigationHeader';

import styles from './Post.module.css';

export default function Post() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
      </article>
    </section>
  );
}

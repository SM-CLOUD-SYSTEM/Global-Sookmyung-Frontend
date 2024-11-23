import { Profile } from '@pages/MyPage/components';

import styles from './MyPage.module.css';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}></article>
    </section>
  );
}

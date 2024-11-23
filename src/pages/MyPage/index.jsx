import { Group, Profile } from '@pages/MyPage/components';

import { PATH } from '@constants';

import styles from './MyPage.module.css';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.groups}>
          <Group title='내 정보'></Group>
          <Group
            title='내가 쓴 글'
            to={{
              path: PATH.myPost,
              label: '전체보기',
            }}
          ></Group>
          <Group
            title='즐겨찾기한 글'
            to={{
              path: PATH.bookmark,
              label: '전체보기',
            }}
          ></Group>
        </div>
      </article>
    </section>
  );
}

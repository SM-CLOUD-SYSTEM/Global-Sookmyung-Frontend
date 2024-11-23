import { Group, Info, Profile } from '@pages/MyPage/components';

import { PATH } from '@constants';
import { ReactComponent as BookIcon } from '@assets/book.svg';
import { ReactComponent as CallIcon } from '@assets/call.svg';
import { ReactComponent as SchoolIcon } from '@assets/school.svg';

import { INFO } from '@dummy/user.js';

import styles from './MyPage.module.css';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.groups}>
          <Group title='내 정보'>
            <div className={styles.myInfo}>
              <Info Icon={SchoolIcon} label='학교' value={INFO.school} />
              <Info Icon={BookIcon} label='학과' value={INFO.major} />
              <Info Icon={CallIcon} label='번호' value={INFO.number} />
            </div>
          </Group>
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

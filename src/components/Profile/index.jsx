import LinkButton from '@components/Profile/LinkButton.jsx';
import LoggedOutProfile from '@components/Profile/LoggedOutProfile.jsx';

import { PATH } from '@constants';
import DefaultProfile from '@assets/profile.png';
import { USER } from '@dummy';

import styles from './Profile.module.css';

const nickname = '흑백요리사';

export default function Profile() {
  if (USER.isLogin) {
    return (
      <aside className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.top}>
            <img
              className={styles.image}
              src={DefaultProfile}
              alt='default profile'
            />
            <p className={styles.nickname}>{nickname}</p>
          </div>
          <div className={styles.bottom}>
            <LinkButton to={PATH.myPost}>내가 쓴 글 보러가기</LinkButton>
            <LinkButton to={PATH.bookmark}>즐겨찾기한 글 보러가기</LinkButton>
            <button
              className={styles.logout}
              onClick={() => alert('로그아웃!')}
            >
              로그아웃
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return <LoggedOutProfile />;
}

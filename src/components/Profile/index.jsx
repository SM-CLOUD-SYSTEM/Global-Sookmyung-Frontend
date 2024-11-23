import ProfileImage from '@components/ProfileImage';
import LinkButton from '@components/Profile/LinkButton.jsx';
import LoggedOutProfile from '@components/Profile/LoggedOutProfile.jsx';

import { PATH } from '@constants';

import { USER } from '@dummy';

import styles from './Profile.module.css';

export default function Profile() {
  if (USER.isLogin) {
    return (
      <aside className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.top}>
            <div className={styles.image}>
              <ProfileImage profileUrl={USER.profileUrl} />
            </div>
            <p className={styles.nickname}>{USER.nickname}</p>
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

import ProfileImage from '@components/ProfileImage';

import { PATH } from '@constants';
import { ReactComponent as LogoutIcon } from '@assets/logout.svg';
import { USER } from '@dummy';

import styles from './Profile.module.css';

export default function Profile() {
  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <ProfileImage profileUrl={USER.profileUrl} />
      </div>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.wrapper}>
          <div className={styles.meta}>
            <span className={styles.nickname}>{USER.nickname}</span>
            <span className={styles.catchphrase}>{USER.catchphrase}</span>
          </div>
          <div className={styles.logout}>
            <button
              className={styles.button}
              onClick={() => alert('로그아웃!')}
            >
              <span>로그아웃</span> <LogoutIcon />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

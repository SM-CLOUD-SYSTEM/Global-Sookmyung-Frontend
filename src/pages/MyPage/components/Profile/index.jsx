import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProfile, logout } from '@apis';

import ProfileImage from '@components/ProfileImage';

import { PATH, QUERY_KEY } from '@constants';
import { ReactComponent as LogoutIcon } from '@assets/logout.svg';
import { USER } from '@dummy';

import styles from './Profile.module.css';

export default function Profile() {
  const navigate = useNavigate();

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.profile],
    queryFn: getProfile,
  });
  const { nickname } = data;

  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <ProfileImage profileUrl={USER.profileUrl} />
      </div>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.wrapper}>
          <div className={styles.meta}>
            <span className={styles.nickname}>{nickname}</span>
          </div>
          <div className={styles.logout}>
            <button
              className={styles.button}
              onClick={() => {
                navigate('/');
                logout();
              }}
            >
              <span>로그아웃</span> <LogoutIcon />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

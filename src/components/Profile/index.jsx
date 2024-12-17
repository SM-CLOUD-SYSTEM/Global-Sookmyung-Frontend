import { useSuspenseQuery } from '@tanstack/react-query';

import { getProfile } from '@apis';

import ProfileImage from '@components/ProfileImage';
import LinkButton from '@components/Profile/LinkButton.jsx';

import { PATH, QUERY_KEY } from '@constants';

import { USER } from '@dummy';

import styles from './Profile.module.css';

export default function Profile() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.profile],
    queryFn: getProfile,
    gcTime: 1000 * 60 * 5,
  });
  const { nickname } = data;

  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.top}>
          <div className={styles.image}>
            <ProfileImage profileUrl={USER.profileUrl} />
          </div>
          <p className={styles.nickname}>{nickname}</p>
        </div>
        <div className={styles.bottom}>
          <LinkButton to={PATH.myPost}>내가 쓴 글 보러가기</LinkButton>
          <LinkButton to={PATH.bookmark}>즐겨찾기한 글 보러가기</LinkButton>
          <button className={styles.logout} onClick={() => alert('로그아웃!')}>
            로그아웃
          </button>
        </div>
      </div>
    </aside>
  );
}

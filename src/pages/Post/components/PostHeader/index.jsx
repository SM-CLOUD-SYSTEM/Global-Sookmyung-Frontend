import ProfileImage from '@components/ProfileImage';

import { ReactComponent as MoreIcon } from '@assets/more.svg';
import DefaultProfile from '@assets/profile.png';

import styles from './PostHeader.module.css';

export default function PostHeader({ post }) {
  const {
    title,
    profileUrl = DefaultProfile,
    authorName,
    createdAt,
    likeCount,
    bookmarkCount,
  } = post;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>
        <MoreIcon className={styles.more} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.profile}>
            <ProfileImage profileUrl={profileUrl} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.nickname}>{authorName}</div>
          <div className={styles.meta}>
            <div>
              <span className={styles.date}>{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

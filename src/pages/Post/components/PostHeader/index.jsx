import DateFormatter from '@utils/Date.js';
import { ReactComponent as MoreIcon } from '@assets/more.svg';
import DefaultProfile from '@assets/profile.png';

import styles from './PostHeader.module.css';

export default function PostHeader({ post }) {
  const {
    title,
    profileImage = DefaultProfile,
    writer,
    date,
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
          <img
            className={styles.profile}
            src={profileImage}
            alt='profile image'
          />
        </div>
        <div className={styles.right}>
          <div className={styles.writer}>{writer}</div>
          <div className={styles.meta}>
            <div>
              <span className={styles.date}>
                {DateFormatter.formatDotNotation(date)}
              </span>
            </div>
            <div className={styles.count}>
              <span>좋아요 {likeCount}</span>
              <span>북마크 {bookmarkCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

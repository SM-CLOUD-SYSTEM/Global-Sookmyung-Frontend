import ProfileImage from '@components/ProfileImage';

import DateFormatter from '@utils/Date.js';

import styles from './Comment.module.css';

export default function Comment({ comment }) {
  const { profileUrl, nickname, date, content } = comment;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <ProfileImage />
        </div>
        <div className={styles.meta}>
          <span className={styles.nickname}>{nickname}</span>
          <span className={styles.date}>
            {DateFormatter.formatDotNotation(date)}
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}

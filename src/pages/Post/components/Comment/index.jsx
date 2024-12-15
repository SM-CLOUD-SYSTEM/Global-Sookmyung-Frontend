import ProfileImage from '@components/ProfileImage';

import styles from './Comment.module.css';

export default function Comment({ comment }) {
  const { commentId, author, content, createdAt, isMyComment } = comment;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.profile}>
          <ProfileImage />
        </div>
        <div className={styles.meta}>
          <span className={styles.nickname}>{author}</span>
          <span className={styles.date}>{createdAt}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}

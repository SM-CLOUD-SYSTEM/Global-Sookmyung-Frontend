import { formatDateToMonthDay } from '@utils/date.js';
import { ReactComponent as LikeIcon } from '@assets/like.svg';

import styles from './Post.module.css';

export default function Post({ post }) {
  const { postId, title, commentCount, date, writer, likeCount } = post;

  return (
    <li className={styles.post}>
      <div className={styles.left}>
        <span className={styles.title}>{title}</span>
        <span className={styles.commentCount}>({commentCount})</span>
        <span className={styles.date}>{formatDateToMonthDay(date)}</span>
      </div>
      <div className={styles.right}>
        <div>
          <span className={styles.writer}>{writer}</span>
        </div>
        <div>
          <span className={styles.likeCount}>
            <LikeIcon />
            {likeCount}
          </span>
        </div>
      </div>
    </li>
  );
}

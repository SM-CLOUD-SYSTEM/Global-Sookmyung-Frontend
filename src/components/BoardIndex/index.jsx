import styles from './BoardIndex.module.css';

export default function BoardIndex({ square = false }) {
  return (
    <div className={styles.postBox}>
      <div className={`${styles.boardIndex} ${square && styles.square}`}>
        <span className={styles.name}>제목</span>
        <div className={styles.right}>
          <div>
            <span className={styles.name}>작성자</span>
          </div>
          <div>
            <span className={styles.name}>좋아요</span>
          </div>
        </div>
      </div>
    </div>
  );
}

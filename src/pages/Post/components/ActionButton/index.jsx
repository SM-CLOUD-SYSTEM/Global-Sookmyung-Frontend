import styles from './ActionButton.module.css';

export default function ActionButton({
  isActive = false,
  onClick,
  text,
  count,
  InactiveIcon,
  ActiveIcon,
}) {
  return (
    <div className={`${styles.container} ${isActive && styles.active}`}>
      <button className={styles.button} onClick={onClick}>
        {isActive ? (
          <ActiveIcon className={styles.icon} />
        ) : (
          <InactiveIcon className={styles.icon} />
        )}
        <span className={styles.text}>{text}</span>
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
}

import styles from './Info.module.css';

export default function Info({ Icon, label, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Icon />
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}

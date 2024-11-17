import { BUTTON_SIZE } from '@constants';
import styles from './Button.module.css';

export default function Button({
  children,
  size = BUTTON_SIZE.regular,
  disabled = false,
}) {
  return (
    <button className={`${styles.button} ${styles[size]}`} disabled={disabled}>
      {children}
    </button>
  );
}

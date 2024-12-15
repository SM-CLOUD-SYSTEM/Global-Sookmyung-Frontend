import { BUTTON_SIZE } from '@constants';

import styles from './Button.module.css';

export default function Button({
  className,
  children,
  size = BUTTON_SIZE.regular,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${className}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

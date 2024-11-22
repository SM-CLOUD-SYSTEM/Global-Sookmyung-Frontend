import { BUTTON_SIZE } from '@constants';

import styles from './WhiteButton.module.css';

export default function WhiteButton({
  children,
  size = BUTTON_SIZE.regular,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

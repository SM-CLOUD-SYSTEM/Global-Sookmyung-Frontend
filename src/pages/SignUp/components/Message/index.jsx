import { ReactComponent as ErrorIcon } from '@assets/error.svg';
import { ReactComponent as SuccessIcon } from '@assets/success.svg';

import styles from './Message.module.css';

export default function Message({ text, condition }) {
  if (condition === undefined) return null;

  return (
    <div
      className={`${styles.message} ${condition ? styles.success : styles.error}`}
    >
      {condition ? <SuccessIcon /> : <ErrorIcon />} <span>{text}</span>
    </div>
  );
}

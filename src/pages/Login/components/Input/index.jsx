import { ReactComponent as ResetIcon } from '@assets/cancel.svg';

import styles from './InputWithReset.module.css';

export default function InputWithReset({
  type,
  value,
  setValue,
  placeholder,
  Icon,
}) {
  const clear = () => setValue('');

  return (
    <label className={styles.container}>
      <Icon />
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <ResetIcon className={styles.reset} onClick={clear} />
    </label>
  );
}

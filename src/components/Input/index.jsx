import { INPUT_ICON } from '@constants';

import { ReactComponent as Clear } from '@assets/Input/cancel.svg';
import { ReactComponent as Key } from '@assets/Input/key.svg';
import { ReactComponent as Person } from '@assets/Input/person.svg';

import styles from './Input.module.css';

export default function Input({
  name,
  value,
  defaultValue,
  updateValue,
  placeholder,
  icon,
  hasClearButton = false,
  disabled = false,
}) {
  const clear = () => setValue('');

  return (
    <label className={styles.container}>
      {icon === INPUT_ICON.key && <Key />}
      {icon === INPUT_ICON.person && <Person />}
      <input
        name={name}
        className={styles.input}
        type='text'
        value={value}
        defaultValue={defaultValue}
        onChange={updateValue}
        placeholder={placeholder}
        disabled={disabled}
      />
      {hasClearButton && <Clear className={styles.cancel} onClick={clear} />}
    </label>
  );
}

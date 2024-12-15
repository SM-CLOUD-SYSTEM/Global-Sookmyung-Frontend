import { INPUT_ICON } from '@constants';

import { ReactComponent as Clear } from '@assets/Input/cancel.svg';
import { ReactComponent as Key } from '@assets/Input/key.svg';
import { ReactComponent as Person } from '@assets/Input/person.svg';

import styles from './Input.module.css';

export default function Input({
  type = 'text',
  name,
  value,
  defaultValue,
  updateValue,
  placeholder,
  icon,
  rightElement,
  disabled = false,
}) {
  return (
    <label className={styles.container}>
      {icon === INPUT_ICON.key && <Key />}
      {icon === INPUT_ICON.person && <Person />}
      <input
        name={name}
        className={styles.input}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={updateValue}
        placeholder={placeholder}
        disabled={disabled}
      />
      {rightElement}
    </label>
  );
}

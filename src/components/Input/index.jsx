import { INPUT_ICON } from '@constants';

import { ReactComponent as Clear } from '@assets/Input/cancel.svg';
import { ReactComponent as Key } from '@assets/Input/key.svg';
import { ReactComponent as Person } from '@assets/Input/person.svg';

import styles from './Input.module.css';

export default function Input({
  value,
  setValue,
  placeholder,
  icon,
  hasClearButton = false,
}) {
  const clear = () => setValue('');
  const update = (event) => setValue(event.target.value);

  return (
    <label className={styles.container}>
      {icon === INPUT_ICON.key && <Key />}
      {icon === INPUT_ICON.person && <Person />}
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={update}
        placeholder={placeholder}
      />
      {hasClearButton && <Clear className={styles.cancel} onClick={clear} />}
    </label>
  );
}

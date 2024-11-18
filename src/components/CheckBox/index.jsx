import { ReactComponent as CheckIcon } from '@assets/check.svg';
import { ReactComponent as UncheckIcon } from '@assets/uncheck.svg';

import styles from './CheckBox.module.css';

export default function CheckBox({ checked, setChecked }) {
  const onChange = (event) => setChecked(event.target.checked);

  return (
    <label className={styles.checkBox}>
      {checked ? <CheckIcon /> : <UncheckIcon />}
      <input
        className={styles.input}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

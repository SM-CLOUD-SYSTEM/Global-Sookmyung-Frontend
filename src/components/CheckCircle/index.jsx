import { ReactComponent as CheckCircleIcon } from '@assets/checkCircle.svg';
import { ReactComponent as UncheckCircleIcon } from '@assets/uncheckCircle.svg';

import styles from './CheckCircle.module.css';

export default function CheckBox({ checked, setChecked, children }) {
  const onChange = (event) => setChecked(event.target.checked);

  return (
    <label className={styles.checkCircle}>
      {checked ? <CheckCircleIcon /> : <UncheckCircleIcon />}
      <span className={styles.label}>{children}</span>
      <input
        className={styles.input}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

import { ReactComponent as CheckCircleIcon } from '@assets/checkCircle.svg';
import { ReactComponent as UncheckCircleIcon } from '@assets/uncheckCircle.svg';

import styles from './CheckCircle.module.css';

export default function CheckBox({ name, checked, updateChecked, children }) {
  return (
    <label className={styles.checkCircle}>
      {checked ? <CheckCircleIcon /> : <UncheckCircleIcon />}
      <span className={styles.label}>{children}</span>
      <input
        name={name}
        className={styles.input}
        type='checkbox'
        checked={checked}
        onChange={(event) => {
          const { name, checked } = event.target;
          updateChecked({ target: { name, value: checked } });
        }}
      />
    </label>
  );
}

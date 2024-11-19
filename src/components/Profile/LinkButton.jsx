import { Link } from 'react-router-dom';

import styles from './LinkButton.module.css';

export default function LinkButton({ children, to }) {
  return (
    <Link className={styles.link} to={to}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}

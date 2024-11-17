import { useLocation, Link } from 'react-router-dom';

import styles from './BoardMenu.module.css';

export default function BoardMenu({ to, name }) {
  const { pathname } = useLocation();
  const isSeleced = to === pathname && styles.select;

  return (
    <Link to={to} className={isSeleced}>
      <li className={`${styles.menu} `}>
        <span className={styles.name}>{name}</span>
      </li>
    </Link>
  );
}

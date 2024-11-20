import { useLocation, Link } from 'react-router-dom';

import styles from './BoardMenu.module.css';
import { getDetailPathname } from '../../utils/path.js';

export default function BoardMenu({ to, name }) {
  const { pathname } = useLocation();
  const isSelected = () => {
    const currentPath = getDetailPathname(pathname);
    return currentPath.includes(to) ? styles.select : null;
  };

  return (
    <Link to={to} className={isSelected()}>
      <li className={styles.menu}>
        <span className={styles.name}>{name}</span>
      </li>
    </Link>
  );
}

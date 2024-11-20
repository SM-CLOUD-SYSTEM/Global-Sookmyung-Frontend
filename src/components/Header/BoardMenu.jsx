import { useLocation, Link } from 'react-router-dom';

import Path from '@utils/Path.js';

import styles from './BoardMenu.module.css';

export default function BoardMenu({ to, name }) {
  const { pathname } = useLocation();
  const isSelected = () => {
    const currentPath = Path.convertPathnameForRoot(pathname);
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

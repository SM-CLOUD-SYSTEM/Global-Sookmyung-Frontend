import { useLocation, Link } from 'react-router-dom';

import Path from '@utils/Path.js';
import { ReactComponent as BackIcon } from '@assets/backArrow.svg';

import styles from './BoardNavigationHeader.module.css';

const UNIV = 'Sookmyung Women’s Univ.';

export default function BoardNavigationHeader() {
  const { pathname } = useLocation();
  const { path, name } = Path.getBoard(pathname);

  return (
    <Link to={path}>
      <div className={styles.container}>
        <div className={styles.navigator}>
          <BackIcon width={14} height={14} />
          <span className={styles.name}>
            {UNIV} {name}
          </span>
        </div>
      </div>
    </Link>
  );
}

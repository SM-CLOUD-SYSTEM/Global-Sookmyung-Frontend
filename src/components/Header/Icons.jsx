import { useLocation, Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '@assets/Header/search.svg';
import { ReactComponent as AccountCircleIcon } from '@assets/Header/accountCircle.svg';
import { ReactComponent as AccountCirclePressIcon } from '@assets/Header/accountCirclePress.svg';

import { PATH } from '@constants';

import styles from './Icons.module.css';

export default function Icons() {
  const { pathname } = useLocation();

  return (
    <div className={styles.icons}>
      <Link to={PATH.search}>
        <SearchIcon />
      </Link>
      <Link to={PATH.mypage}>
        {pathname === PATH.mypage ? (
          <AccountCirclePressIcon />
        ) : (
          <AccountCircleIcon />
        )}
      </Link>
    </div>
  );
}

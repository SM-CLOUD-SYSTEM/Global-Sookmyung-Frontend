import { useLocation, Link } from 'react-router-dom';

import BoardMenu from '@components/Header/BoardMenu.jsx';

import { BOARD, PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as SearchIcon } from '@assets/Header/search.svg';
import { ReactComponent as AccountCircleIcon } from '@assets/Header/accountCircle.svg';
import { ReactComponent as AccountCirclePressIcon } from '@assets/Header/accountCirclePress.svg';

import styles from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to={PATH.root}>
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.categories}>
        <BoardMenu to={PATH.allBoard} name={BOARD.all.name} />
        <BoardMenu
          to={PATH.internationalBoard}
          name={BOARD.international.name}
        />
      </ul>
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
    </header>
  );
}

import { Link } from 'react-router-dom';

import BoardMenu from '@components/Header/BoardMenu.jsx';
import LoginButton from '@components/Header/LoginButton.jsx';
import MyPageIcon from '@components/Header/MyPageIcon.jsx';

import { BOARD, PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as SearchIcon } from '@assets/Header/search.svg';

import styles from './Header.module.css';

export default function Header() {
  const isLogin = false;

  return (
    <header className={styles.header}>
      <Link to={PATH.root}>
        <Logo />
      </Link>
      <ul className={styles.menus}>
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
        {isLogin ? <MyPageIcon /> : <LoginButton />}
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';

import BoardMenu from '@components/Header/BoardMenu.jsx';
import LoginButton from '@components/Header/LoginButton.jsx';
import MyPageIcon from '@components/Header/MyPageIcon.jsx';

import { BOARD, PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as SearchIcon } from '@assets/Header/search.svg';
import { USER } from '@dummy';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={PATH.root}>
        <Logo />
      </Link>
      <ul className={styles.menus}>
        <BoardMenu to={PATH.allBoard} name={BOARD[PATH.allBoard].name} />
        <BoardMenu
          to={PATH.internationalBoard}
          name={BOARD[PATH.internationalBoard].name}
        />
      </ul>
      <div className={styles.icons}>
        <Link to={PATH.search}>
          <SearchIcon />
        </Link>
        {USER.isLogin ? <MyPageIcon /> : <LoginButton />}
      </div>
    </header>
  );
}

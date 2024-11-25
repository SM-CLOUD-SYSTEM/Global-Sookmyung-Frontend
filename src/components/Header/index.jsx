import { Link } from 'react-router-dom';

import BoardMenu from '@components/Header/BoardMenu.jsx';
import LoginButton from '@components/Header/LoginButton.jsx';
import MyPageIcon from '@components/Header/MyPageIcon.jsx';
import SearchIcon from '@components/Header/SearchIcon.jsx';

import { BOARD, PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';

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
        <SearchIcon />
        {USER.isLogin ? <MyPageIcon /> : <LoginButton />}
      </div>
    </header>
  );
}

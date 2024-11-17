import { useLocation, Link } from 'react-router-dom';

import BoardMenu from '@components/Header/BoardMenu.jsx';
import Icons from '@components/Header/Icons.jsx';
import LoginButton from '@components/Header/LoginButton.jsx';

import { BOARD, PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';

import styles from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  const isLogin = false;

  return (
    <header className={styles.header}>
      <Link to={PATH.root}>
        <Logo className={styles.logo} />
      </Link>
      <ul className={styles.menus}>
        <BoardMenu to={PATH.allBoard} name={BOARD.all.name} />
        <BoardMenu
          to={PATH.internationalBoard}
          name={BOARD.international.name}
        />
      </ul>
      {isLogin ? <Icons /> : <LoginButton />}
    </header>
  );
}

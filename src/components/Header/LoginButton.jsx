import { Link } from 'react-router-dom';

import { PATH } from '@constants';

import styles from './LoginButton.module.css';

export default function LoginButton() {
  return (
    <Link to={PATH.login}>
      <button className={styles.button}>로그인</button>
    </Link>
  );
}

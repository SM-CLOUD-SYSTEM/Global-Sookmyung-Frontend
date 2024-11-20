import { Link } from 'react-router-dom';

import { Button } from '@components';

import { BUTTON_SIZE, PATH } from '@constants';

import styles from './LoggedOutProfile.module.css';

export default function LoggedOutProfile() {
  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.top}>
          <p>
            <span>로그인</span>이 필요한 서비스입니다.
          </p>
        </div>
        <div className={styles.bottom}>
          <Link className={styles.toLogin} to={PATH.login}>
            <Button size={BUTTON_SIZE.medium}>로그인 하기</Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}

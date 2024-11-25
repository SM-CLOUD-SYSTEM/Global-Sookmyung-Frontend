import { useLocation, Link } from 'react-router-dom';

import { PATH } from '@constants';

import { ReactComponent as AccountCircleIcon } from '@assets/Header/accountCircle.svg';
import { ReactComponent as AccountCirclePressIcon } from '@assets/Header/accountCirclePress.svg';

import styles from './MyPageIcon.module.css';

export default function MyPageIcon() {
  const { pathname } = useLocation();

  return (
    <Link className={styles.icon} to={PATH.myPage}>
      {pathname === PATH.myPage ? (
        <AccountCirclePressIcon />
      ) : (
        <AccountCircleIcon />
      )}
    </Link>
  );
}

import { Link } from 'react-router-dom';

import { PATH } from '@constants';

import styles from './Notice.module.css';

const title = '글로벌 숙명 런칭 이벤트 (24.11.27)';

export default function Notice() {
  return (
    <div className={styles.notice}>
      <span className={styles.tag}>공지</span>
      <Link to={PATH.root}>
        <p className={styles.title}>{title}</p>
      </Link>
    </div>
  );
}

import { useLocation, Link } from 'react-router-dom';

import { Button } from '@components';

import Path from '@utils/Path.js';
import { BUTTON_SIZE, PATH } from '@constants';

import styles from './BoardHeader.module.css';

export default function BoardHeader() {
  const { pathname } = useLocation();
  const { path } = Path.getBoard(pathname);
  const to = `${path}${PATH.postCreation}`;

  return (
    <div className={styles.boardHeader}>
      <h2 className={styles.boardTitle}>게시글</h2>
      <div className={styles.writeButton}>
        <Link className={styles.link} to={to}>
          <Button size={BUTTON_SIZE.small}>글쓰기</Button>
        </Link>
      </div>
    </div>
  );
}

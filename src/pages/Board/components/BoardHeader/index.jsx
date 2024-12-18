import { useLocation, Link } from 'react-router-dom';

import { Button } from '@components';

import { BUTTON_SIZE, PATH } from '@constants';

import styles from './BoardHeader.module.css';

export default function BoardHeader() {
  return (
    <div className={styles.boardHeader}>
      <h2 className={styles.boardTitle}>게시글</h2>
      <div className={styles.writeButton}>
        <Link className={styles.link} to={PATH.postCreation}>
          <Button size={BUTTON_SIZE.small}>글쓰기</Button>
        </Link>
      </div>
    </div>
  );
}

import { Button } from '@components';

import { BUTTON_SIZE } from '@constants';

import styles from './BoardHeader.module.css';

export default function BoardHeader() {
  return (
    <div className={styles.boardHeader}>
      <h2 className={styles.boardTitle}>게시글</h2>
      <div className={styles.writeButton}>
        <Button size={BUTTON_SIZE.small}>글쓰기</Button>
      </div>
    </div>
  );
}

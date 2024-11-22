import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Profile } from '@components';
import { Dropdown } from '@pages/PostCreation/components';

import Path from '@utils/Path.js';
import { BOARD } from '@constants';

import styles from './PostCreation.module.css';

const [_, ...boards] = Object.values(BOARD);

export default function PostCreation() {
  const { pathname } = useLocation();
  const board = Path.getBoard(pathname);

  const [boardId, setBoardId] = useState(board.id);
  const [title, setTitle] = useState('');

  const updateTitle = (event) => setTitle(event.target.value);

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.top}>
          <div className={styles.category}>
            <div className={styles.left}>
              <span className={styles.label}>게시판</span>
            </div>
            <div className={styles.right}>
              <Dropdown
                options={boards}
                setValue={setBoardId}
                initial={board}
              />
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.left}>
              <span className={styles.label}>제목</span>
            </div>
            <div className={styles.right}>
              <input
                className={styles.input}
                type='text'
                value={title}
                onChange={updateTitle}
                placeholder='제목을 입력해주세요'
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </article>
    </section>
  );
}

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Profile, WhiteButton } from '@components';
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
  const [content, setContent] = useState('');

  const updateTitle = (event) => setTitle(event.target.value);
  const updateContent = (event) => setContent(event.target.value);

  const canCreate = boardId && title && content;

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.wrapper}>
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
          <div className={styles.bottom}>
            <textarea
              className={styles.content}
              value={content}
              onChange={updateContent}
              placeholder='내용을 입력해주세요'
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <div>
            <WhiteButton>취소</WhiteButton>
            <Button disabled={!canCreate}>등록</Button>
          </div>
        </div>
      </article>
    </section>
  );
}

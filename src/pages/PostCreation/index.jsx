import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { usePost } from '@hooks';
import { Button, Profile, WhiteButton } from '@components';
import { Dropdown } from '@pages/PostCreation/components';

import Path from '@utils/Path.js';
import { BOARD, MUTATION_KEY } from '@constants';

import styles from './PostCreation.module.css';

const [_, ...boards] = Object.values(BOARD).map(({ name }) => name);

export default function PostCreation() {
  const { pathname } = useLocation();
  const board = Path.getBoard(pathname);

  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [boardName, setBoardName] = useState(board.name);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const updateTitle = (event) => setTitle(event.target.value);
  const updateContent = (event) => setContent(event.target.value);

  const canCreate = boardName && title && content;

  const { createPost } = usePost();
  const create = useMutation({
    mutationKey: [MUTATION_KEY.createPost],
    mutationFn: createPost,
    onSuccess: () => {
      alert('게시글 작성 완료!');
      navigate(-1);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

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
                  boardName={boardName}
                  options={boards}
                  setValue={setBoardName}
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
            <WhiteButton onClick={back}>취소</WhiteButton>
            <Button
              onClick={async () =>
                await create.mutate({ boardName, title, content })
              }
              disabled={!canCreate}
            >
              등록
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}

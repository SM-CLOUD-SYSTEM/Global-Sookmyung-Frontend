import { Suspense, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import {
  useQueryClient,
  useMutation,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';

import { createPost } from '@apis';

import {
  Button,
  WhiteButton,
  Profile,
  ProfileErrorFallback,
  Loading,
} from '@components';
import { Dropdown } from '@pages/PostCreation/components';

import { BOARD, MUTATION_KEY } from '@constants';

import styles from './PostCreation.module.css';

const [_, ...boards] = Object.values(BOARD).map(({ name }) => name);

export default function PostCreation() {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [boardName, setBoardName] = useState('All Student');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setLoading] = useState();

  const updateTitle = (event) => setTitle(event.target.value);
  const updateContent = (event) => setContent(event.target.value);

  const type = boardName.split(' ').join('_').toUpperCase();

  const canCreate = boardName && title && content;

  const queryClient = useQueryClient();

  const create = async () => {
    try {
      setLoading(true);

      const type = boardName.split(' ').join('_').toUpperCase();

      await createPost({ type, title, content });
      await queryClient.invalidateQueries([QUERY_KEY.posts, type]);

      alert('게시글 작성 완료!');

      const boardPath =
        boardName === 'All Students' ? PATH.allBoard : internationalBoard;

      navigate(boardPath);
    } catch (error) {
      const { status } = error?.response ?? {};

      if (status === 401) {
        alert('로그인 후 이용해주세요');
        back();
        return;
      }

      if (status === 403 || status === 400) {
        alert('작성 권한이 없습니다');
        back();
        return;
      }

      alert('잠시 후 다시 시도해주세요');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ProfileErrorFallback}
          >
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

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
            <Button onClick={create} disabled={!canCreate || isLoading}>
              등록
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}

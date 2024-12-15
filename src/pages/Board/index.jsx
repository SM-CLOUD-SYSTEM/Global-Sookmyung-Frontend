import { Suspense, useState, startTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { BoardIndex, Paginator, Profile, Loading } from '@components';
import {
  BoardHeader,
  Notice,
  Posts,
  PostsErrorFallback,
} from '@pages/Board/components';

import { BOARD } from '@constants';

import styles from './Board.module.css';

const START_PAGE = 1;
const pageCount = 117;

export default function Board() {
  const { pathname } = useLocation();
  const board = BOARD[pathname];
  const { name, title, describe } = board;

  const [page, setPage] = useState(START_PAGE);

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.top}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.describe}>{describe}</span>
        </div>
        <div className={styles.middle}>
          <Notice />
        </div>
        <div className={styles.bottom}>
          <BoardHeader />
          <div className={styles.board}>
            <BoardIndex />
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  FallbackComponent={PostsErrorFallback}
                >
                  <Suspense fallback={<Loading />}>
                    <Posts board={board} />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
          <Paginator page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </article>
    </section>
  );
}

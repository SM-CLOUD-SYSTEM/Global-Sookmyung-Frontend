import { useState, Suspense } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { BoardIndex, Button, Paginator, Loading } from '@components';
import { Posts, PostsErrorFallback } from '@pages/GroupBoard/components';

import { PATH } from '@constants';
import { ReactComponent as BackIcon } from '@assets/backArrow.svg';

import styles from './GroupBoard.module.css';

export default function GroupBoard() {
  const [page, setPage] = useState(1);

  const { pathname } = useLocation();
  const isSelected = (value) => (value === pathname ? styles.select : null);

  const navigate = useNavigate();
  const back = () => navigate(PATH.myPage);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.back} onClick={back}>
          <BackIcon width={28} height={28} />
        </div>
        <div className={styles.group}>
          <div className={styles.tab}>
            <button
              className={`${styles.button} ${isSelected(PATH.myPost)}`}
              onClick={() => navigate(PATH.myPost)}
            >
              내가 쓴 글
            </button>
            <button
              className={`${styles.button} ${isSelected(PATH.bookmark)}`}
              onClick={() => navigate(PATH.bookmark)}
            >
              즐겨찾기한 글
            </button>
          </div>
          <div>
            <BoardIndex square />
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  FallbackComponent={PostsErrorFallback}
                >
                  <Suspense fallback={<Loading />}>
                    <Posts />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
          <div className={styles.writeButton}>
            <Link to={PATH.postCreation}>
              <Button>글쓰기</Button>
            </Link>
          </div>
        </div>
        <div className={styles.paginator}>
          <Paginator page={page} setPage={setPage} pageCount={117} />
        </div>
      </div>
    </section>
  );
}

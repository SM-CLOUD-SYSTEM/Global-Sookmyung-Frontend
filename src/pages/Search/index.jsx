import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import {
  BoardIndex,
  Paginator,
  Profile,
  ProfileErrorFallback,
  Loading,
} from '@components';
import {
  Posts,
  PostsErrorFallback,
  SearchInput,
} from '@pages/Search/components';

import { ReactComponent as ManageSearch } from '@assets/manageSearch.svg';

import styles from './Search.module.css';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const search = (value) => setKeyword(() => value);

  const [page, setPage] = useState(1);

  return (
    <section className={styles.container}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={ProfileErrorFallback}
            onReset={reset}
          >
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <article className={styles.article}>
        <div className={styles.search}>
          <div className={styles.title}>
            <ManageSearch />
            <h2>
              <span className={styles.keyword}>
                "<span className={styles.underline}>{keyword}</span>"
              </span>
              검색 결과입니다.
            </h2>
          </div>
          <SearchInput keyword={keyword} search={search} />
        </div>
        <div className={styles.result}>
          {/* <h3 className={styles.length}>{0}건</h3> */}
          <div className={styles.board}>
            <BoardIndex />
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  FallbackComponent={PostsErrorFallback}
                  onReset={reset}
                >
                  <Suspense fallback={<Loading />}>
                    <Posts keyword={keyword} />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
          <div className={styles.paginator}>
            <Paginator page={page} setPage={setPage} pageCount={117} />
          </div>
        </div>
      </article>
    </section>
  );
}

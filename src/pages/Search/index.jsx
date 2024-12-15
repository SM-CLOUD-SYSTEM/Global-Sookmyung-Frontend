import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { useSearch } from '@hooks';
import {
  BoardIndex,
  Post,
  Paginator,
  Profile,
  ProfileErrorFallback,
  Loading,
} from '@components';
import { Category, SearchInput } from '@pages/Search/components';

import Path from '@utils/Path.js';
import { ReactComponent as ManageSearch } from '@assets/manageSearch.svg';

import styles from './Search.module.css';

export default function Search() {
  const { results, keyword, category, updateCategory, search } = useSearch();
  const [page, setPage] = useState(1);

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
          <Category category={category} updateCategory={updateCategory} />
          <h3 className={styles.length}>
            <span className={styles.label}>{category.label}</span>
            {results.length}건
          </h3>
          <div className={styles.board}>
            <BoardIndex />
            <ul>
              {results.map((post) => (
                <Post
                  key={post.postId}
                  post={post}
                  to={Path.getPostPath({
                    postId: post.postId,
                    boardId: post.boardId,
                  })}
                />
              ))}
            </ul>
          </div>
          <div className={styles.paginator}>
            <Paginator page={page} setPage={setPage} pageCount={117} />
          </div>
        </div>
      </article>
    </section>
  );
}

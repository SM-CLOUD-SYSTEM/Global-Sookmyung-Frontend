import { Suspense, startTransition } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorPage from '@pages/ErrorPage';
import { Profile, ProfileErrorFallback, Loading } from '@components';
import {
  BoardNavigationHeader,
  Content,
  ContentErrorFallback,
  Comments,
  CommentsErrorFallback,
  CommentInput,
} from '@pages/Post/components';

import { POST } from '@dummy';

import styles from './Post.module.css';

const { commentCount } = POST;

export default function Post() {
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

      <article className={styles.post}>
        <BoardNavigationHeader />
        <section className={styles.wrapper}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                FallbackComponent={ContentErrorFallback}
                onReset={reset}
              >
                <Suspense fallback={<Loading />}>
                  <Content />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>

          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                FallbackComponent={CommentsErrorFallback}
                onReset={reset}
              >
                <Suspense fallback={<Loading />}>
                  <div className={styles.bottom}>
                    <div className={styles.input}>
                      <p className={styles.commentLabel}>
                        댓글{' '}
                        <span className={styles.commentCount}>
                          {commentCount}
                        </span>
                      </p>
                      <CommentInput />
                    </div>
                    <Comments />
                  </div>
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </section>
      </article>
    </section>
  );
}

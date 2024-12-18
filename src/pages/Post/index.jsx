import { Suspense, startTransition, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryClient, QueryErrorResetBoundary } from '@tanstack/react-query';

import { Profile, ProfileErrorFallback, Loading } from '@components';
import {
  BoardNavigationHeader,
  Content,
  ContentErrorFallback,
  Comments,
  CommentsErrorFallback,
  CommentInput,
} from '@pages/Post/components';

import { QUERY_KEY } from '@constants';

import styles from './Post.module.css';

export default function Post() {
  const { postId } = useParams();
  const [commentCount, setCommentCount] = useState();
  const queryClient = useQueryClient();

  useEffect(() => {
    const interval = setInterval(() => {
      const comments = queryClient.getQueryData([QUERY_KEY.comments, postId]);

      if (comments) {
        setCommentCount(() => comments.length);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { Post, Loading } from '@components';
import {
  Group,
  Info,
  Profile,
  ProfileErrorFallback,
  MyPosts,
  MyPostsErrorFallback,
  BookmarkedPosts,
  BookmarkedPostsErrorFallback,
} from '@pages/MyPage/components';

import { PATH } from '@constants';
import { ReactComponent as BookIcon } from '@assets/book.svg';
import { ReactComponent as CallIcon } from '@assets/call.svg';
import { ReactComponent as SchoolIcon } from '@assets/school.svg';

import { INFO } from '@dummy';

import styles from './MyPage.module.css';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <ErrorBoundary FallbackComponent={ProfileErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Profile />
        </Suspense>
      </ErrorBoundary>

      <article className={styles.article}>
        <div className={styles.groups}>
          <Group
            title='내가 쓴 글'
            to={{
              path: PATH.myPost,
              label: '전체보기',
            }}
          >
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  FallbackComponent={MyPostsErrorFallback}
                >
                  <Suspense fallback={<Loading />}>
                    <MyPosts />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </Group>
          <Group
            title='즐겨찾기한 글'
            to={{
              path: PATH.bookmark,
              label: '전체보기',
            }}
          >
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  FallbackComponent={BookmarkedPostsErrorFallback}
                >
                  <Suspense fallback={<Loading />}>
                    <BookmarkedPosts />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </Group>
        </div>
      </article>
    </section>
  );
}

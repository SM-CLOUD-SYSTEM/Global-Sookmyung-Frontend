import { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';

import { usePost } from '@hooks';

import ErrorPage from '@pages/ErrorPage';
import { Profile, Loading } from '@components';
import {
  BoardNavigationHeader,
  BookmarkButton,
  Comments,
  CommentsErrorFallback,
  CommentInput,
  LikeButton,
  PostHeader,
} from '@pages/Post/components';

import { QUERY_KEY } from '@constants';
import { POST } from '@dummy';

import styles from './Post.module.css';

const { likeCount, bookmarkCount, commentCount } = POST;

export default function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { getPost } = usePost();

  const {
    data: post,
    isPending,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.post, postId],
    queryFn: getPost,
  });

  if (isPending) {
    return (
      <section className={styles.loading}>
        <Loading />
      </section>
    );
  }

  if (error) {
    const { status } = error?.response ?? {};

    if (error.code === 'ERR_NETWORK') {
      alert('네트워크 에러!');
    }

    if (status === 401) {
      alert('로그인이 필요한 서비스입니다');
    }

    if (status === 404) {
      alert('존재하지 않는 게시글입니다');
    }

    if (status !== 401 && status !== 404 && error.code !== 'ERR_NETWORK') {
      alert('잠시 후 다시 시도해주세요');
    }

    navigate(-1);

    return null;
  }

  const { content, isLiked, likeCount, isBookmarked, bookmarkCount } = post;

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.post}>
        <BoardNavigationHeader />
        <section className={styles.wrapper}>
          <div className={styles.top}>
            <PostHeader post={post} />
            <p className={styles.content}>{content}</p>
            <div className={styles.buttons}>
              <LikeButton liked={isLiked} count={likeCount} />
              <BookmarkButton bookmarked={isBookmarked} count={bookmarkCount} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.input}>
              <p className={styles.commentLabel}>
                댓글 <span className={styles.commentCount}>{commentCount}</span>
              </p>
              <CommentInput />
            </div>

            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  FallbackComponent={CommentsErrorFallback}
                  onReset={reset}
                >
                  <Suspense fallback={<Loading />}>
                    <Comments />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
        </section>
      </article>
    </section>
  );
}

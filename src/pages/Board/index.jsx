import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Profile } from '@components';
import {
  BoardHeader,
  BoardIndex,
  Notice,
  Paginator,
  Post,
} from '@pages/Board/components';

import { BOARD, PATH } from '@constants';
import { getDetailPathname } from '@utils/path.js';

import styles from './Board.module.css';

const postId = 1;
const title = '게시글제목';
const commentCount = 1;
const date = '2024-11-20T02:00:00Z';
const writer = '작성자';
const likeCount = 0;
const posts = [
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
  { postId, title, commentCount, date, writer, likeCount },
];

const START_PAGE = 1;
const pageCount = 117;

export default function Board() {
  const [page, setPage] = useState(START_PAGE);
  const { pathname } = useLocation();
  const { title, describe } = BOARD[pathname];
  const getPostPath = (postId) => {
    const basePath = getDetailPathname(pathname);
    const postPath = PATH.post.replace(':postId', postId);
    return `${basePath}${postPath}`;
  };

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
            <ul>
              {posts.map((post) => (
                <Link
                  className={styles.post}
                  key={post.postId}
                  to={getPostPath(post.postId)}
                >
                  <Post post={post} />
                </Link>
              ))}
            </ul>
          </div>
          <Paginator page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </article>
    </section>
  );
}

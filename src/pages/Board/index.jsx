import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BoardIndex, Paginator, Post, Profile } from '@components';
import { BoardHeader, Notice } from '@pages/Board/components';

import Path from '@utils/Path.js';
import { BOARD } from '@constants';
import { POSTS } from '@dummy';

import styles from './Board.module.css';

const START_PAGE = 1;
const pageCount = 117;

export default function Board() {
  const [page, setPage] = useState(START_PAGE);
  const { pathname } = useLocation();
  const { id, title, describe } = BOARD[pathname];

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
              {POSTS.map((post) => (
                <Post
                  key={post.postId}
                  post={post}
                  to={Path.getPostPath({
                    postId: post.postId,
                    boardId: id,
                  })}
                />
              ))}
            </ul>
          </div>
          <Paginator page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </article>
    </section>
  );
}

import { useLocation, Link } from 'react-router-dom';

import { Profile } from '@components';
import { BoardHeader, BoardIndex, Notice, Post } from '@pages/Board/components';

import { BOARD, PATH } from '@constants';

import styles from './Board.module.css';

export default function Board() {
  const { pathname } = useLocation();
  const { title, describe } = BOARD[pathname];

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
        </div>
      </article>
    </section>
  );
}

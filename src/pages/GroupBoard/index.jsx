import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { BoardIndex, Button, Paginator, Post } from '@components';
import Path from '@utils/Path.js';
import { PATH } from '@constants';
import { ReactComponent as BackIcon } from '@assets/backArrow.svg';

import { MY_POSTS, BOOKMARK_POSTS } from '@dummy';

import styles from './GroupBoard.module.css';

const CATEGORY = {
  myPost: 'myPost',
  bookmark: 'bookmark',
};

export default function GroupBoard() {
  const [page, setPage] = useState(1);

  const [category, setCategory] = useState(CATEGORY.myPost);
  const { pathname } = useLocation();

  const changeCategory = (value) => setCategory(value);

  const isSelected = (value) => (value === category ? styles.select : null);
  const POSTS = pathname === PATH.myPost ? MY_POSTS : BOOKMARK_POSTS;

  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.back} onClick={back}>
          <BackIcon width={28} height={28} />
        </div>
        <div className={styles.group}>
          <div className={styles.tab}>
            <button
              className={`${styles.button} ${isSelected(CATEGORY.myPost)}`}
              onClick={() => changeCategory(CATEGORY.myPost)}
            >
              내가 쓴 글
            </button>
            <button
              className={`${styles.button} ${isSelected(CATEGORY.bookmark)}`}
              onClick={() => changeCategory(CATEGORY.bookmark)}
            >
              즐겨찾기한 글
            </button>
          </div>
          <div>
            <BoardIndex square />
            <ul>
              {POSTS.map((post) => (
                <Post
                  post={post}
                  to={Path.getPostPath({
                    postId: post.postId,
                    boardId: post.boardId,
                  })}
                />
              ))}
            </ul>
          </div>
          <div className={styles.writeButton}>
            <Link to={`${PATH.allBoard}${PATH.postCreation}`}>
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

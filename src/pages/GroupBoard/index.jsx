import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { mypageList, getMyPosts } from '@apis';

import { BoardIndex, Button, Paginator, Post, Loading } from '@components';
import Path from '@utils/Path.js';
import { PATH } from '@constants';
import { ReactComponent as BackIcon } from '@assets/backArrow.svg';

import { QUERY_KEY } from '@constants';
import { MY_POSTS, BOOKMARK_POSTS } from '@dummy';

import styles from './GroupBoard.module.css';

const CATEGORY = {
  myPost: 'myPost',
  bookmark: 'bookmark',
};

export default function GroupBoard() {
  const [page, setPage] = useState(1);

  const { pathname } = useLocation();
  const isSelected = (value) => (value === pathname ? styles.select : null);

  const navigate = useNavigate();
  const back = () => navigate(PATH.myPage);

  const { data: posts, isPending } = useQuery({
    queryKey: [QUERY_KEY.mypageList, pathname],
    queryFn: async () => await mypageList({ pathname }),
    initialData: [],
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.back} onClick={back}>
          <BackIcon width={28} height={28} />
        </div>
        <div className={styles.group}>
          <div className={styles.tab}>
            <button
              className={`${styles.button} ${isSelected(PATH.myPost)}`}
              onClick={() => navigate(PATH.myPost)}
            >
              내가 쓴 글
            </button>
            <button
              className={`${styles.button} ${isSelected(PATH.bookmark)}`}
              onClick={() => navigate(PATH.bookmark)}
            >
              즐겨찾기한 글
            </button>
          </div>
          <div>
            <BoardIndex square />
            <ul>
              {posts.map((post) => (
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

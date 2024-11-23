import { Post } from '@components';
import { Group, Info, Profile } from '@pages/MyPage/components';

import Path from '@utils/Path.js';
import { PATH } from '@constants';
import { ReactComponent as BookIcon } from '@assets/book.svg';
import { ReactComponent as CallIcon } from '@assets/call.svg';
import { ReactComponent as SchoolIcon } from '@assets/school.svg';

import { INFO, MY_POSTS, BOOKMARK_POSTS } from '@dummy';

import styles from './MyPage.module.css';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.groups}>
          <Group title='내 정보'>
            <div className={styles.myInfo}>
              <Info Icon={SchoolIcon} label='학교' value={INFO.school} />
              <Info Icon={BookIcon} label='학과' value={INFO.major} />
              <Info Icon={CallIcon} label='번호' value={INFO.number} />
            </div>
          </Group>
          <Group
            title='내가 쓴 글'
            to={{
              path: PATH.myPost,
              label: '전체보기',
            }}
          >
            {MY_POSTS.map((post) => (
              <Post
                post={post}
                to={Path.getPostPath({
                  postId: post.postId,
                  boardId: post.boardId,
                })}
              />
            ))}
          </Group>
          <Group
            title='즐겨찾기한 글'
            to={{
              path: PATH.bookmark,
              label: '전체보기',
            }}
          >
            {BOOKMARK_POSTS.map((post) => (
              <Post
                post={post}
                to={Path.getPostPath({
                  postId: post.postId,
                  boardId: post.boardId,
                })}
              />
            ))}
          </Group>
        </div>
      </article>
    </section>
  );
}

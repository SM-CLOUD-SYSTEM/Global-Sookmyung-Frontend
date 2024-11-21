import { useState } from 'react';

import { Paginator } from '@components';
import { Comment } from '@pages/Post/components';

import { COMMENTS } from '@dummy';

import styles from './Comments.module.css';

const START_PAGE = 1;
const pageCount = 117;

export default function Comments() {
  const [page, setPage] = useState(START_PAGE);

  return (
    <div>
      <ul>
        {COMMENTS.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </ul>
      <div className={styles.paginator}>
        <Paginator page={page} setPage={setPage} pageCount={pageCount} />
      </div>
    </div>
  );
}

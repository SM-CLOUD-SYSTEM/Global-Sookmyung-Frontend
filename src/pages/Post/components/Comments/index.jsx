import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getComments } from '@apis';

import { Paginator } from '@components';
import { Comment } from '@pages/Post/components';

import { QUERY_KEY } from '../../../../constants/query.js';

const START_PAGE = 1;
const pageCount = 117;

export default function Comments() {
  const { postId } = useParams();
  const { data: comments } = useSuspenseQuery({
    queryKey: [QUERY_KEY.comments, postId],
    queryFn: async () => await getComments({ postId }),
  });
  const [page, setPage] = useState(START_PAGE);

  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </ul>
  );
}

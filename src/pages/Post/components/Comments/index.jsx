import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getComments } from '@apis';

import { Comment } from '@pages/Post/components';

import { QUERY_KEY } from '@constants';

export default function Comments() {
  const { postId } = useParams();
  const { data: comments } = useSuspenseQuery({
    queryKey: [QUERY_KEY.comments, postId],
    queryFn: async () => await getComments({ postId }),
  });

  return (
    <ul>
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </ul>
  );
}

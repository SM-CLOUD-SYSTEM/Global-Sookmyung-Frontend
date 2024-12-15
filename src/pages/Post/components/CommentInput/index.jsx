import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { createComment } from '@apis';

import { Button } from '@components';

import { BUTTON_SIZE } from '@constants';

import styles from './CommentInput.module.css';
import { MUTATION_KEY, QUERY_KEY } from '../../../../constants/query.js';

const MAX_LENGTH = 1000;

export default function CommentInput() {
  const [content, setContent] = useState('');
  const onChange = (event) => setContent(event.target.value);

  const { postId } = useParams();
  const queryClient = useQueryClient();
  const create = useMutation({
    mutationKey: MUTATION_KEY.createComment,
    mutationFn: async () => await createComment({ postId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.comments, postId]);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const onSubmit = () => {
    if (!content) {
      return;
    }

    create.mutate();
    setContent('');
  };

  const onKeyDown = (event) => {
    const isEnter = event.key === 'Enter';
    const isMac = navigator.platform.includes('Mac');
    const isModifierKey = isMac ? event.metaKey : event.ctrlKey;

    if (isModifierKey && isEnter) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={MAX_LENGTH}
          placeholder='댓글을 입력해주세요'
        />
        <span className={styles.maxLength}>
          {content.length}/{MAX_LENGTH}
        </span>
      </div>
      <div className={styles.right}>
        <Button size={BUTTON_SIZE.medium} onClick={onSubmit}>
          등록
        </Button>
      </div>
    </div>
  );
}

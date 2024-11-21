import { useState } from 'react';

import { Button } from '@components';

import { BUTTON_SIZE } from '@constants';

import styles from './CommentInput.module.css';

const MAX_LENGTH = 1000;

export default function CommentInput() {
  const [text, setText] = useState('');
  const onChange = (event) => setText(event.target.value);
  const onSubmit = () => {
    if (!text) {
      return;
    }

    console.log(text);
    setText('');
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
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={MAX_LENGTH}
          placeholder='댓글을 입력해주세요'
        />
        <span className={styles.maxLength}>
          {text.length}/{MAX_LENGTH}
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

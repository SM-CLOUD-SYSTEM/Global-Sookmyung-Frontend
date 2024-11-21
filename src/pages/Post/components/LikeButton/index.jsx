import { useState } from 'react';

import ActionButton from '@pages/Post/components/ActionButton';

import { ReactComponent as LikeInactiveIcon } from '@assets/like.svg';
import { ReactComponent as LikeActiveIcon } from '@assets/likeActive.svg';

export default function LikeButton({ liked, count = 0 }) {
  const [isLike, setIsLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const like = () => {
    setIsLike(true);
    setLikeCount((prev) => prev + 1);
  };

  const unlike = () => {
    setIsLike(false);
    setLikeCount((prev) => prev - 1);
  };

  const onClick = () => {
    if (isLike) {
      unlike();
      return;
    }

    like();
  };

  return (
    <ActionButton
      isActive={isLike}
      onClick={onClick}
      text='좋아요'
      count={likeCount}
      InactiveIcon={LikeInactiveIcon}
      ActiveIcon={LikeActiveIcon}
    />
  );
}

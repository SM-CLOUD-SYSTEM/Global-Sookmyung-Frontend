import { useState } from 'react';

import { useLike } from '@hooks';
import ActionButton from '@pages/Post/components/ActionButton';

import { ReactComponent as LikeInactiveIcon } from '@assets/like.svg';
import { ReactComponent as LikeActiveIcon } from '@assets/likeActive.svg';

export default function LikeButton({ liked, count = 0 }) {
  const { like, unlike } = useLike();
  const [isLike, setIsLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const onLike = async () => {
    await like.mutate();
    setIsLike(true);
    setLikeCount((prev) => prev + 1);
  };

  const onUnlike = async () => {
    await unlike.mutate();
    setIsLike(false);
    setLikeCount((prev) => prev - 1);
  };

  const onClick = async () => {
    if (isLike) {
      await onUnlike();
      return;
    }

    await onLike();
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

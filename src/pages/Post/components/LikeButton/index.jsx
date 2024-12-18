import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { like as likeApi, unlike as unlikeApi } from '@apis';

import ActionButton from '@pages/Post/components/ActionButton';

import { MUTATION_KEY } from '@constants';
import { ReactComponent as LikeInactiveIcon } from '@assets/like.svg';
import { ReactComponent as LikeActiveIcon } from '@assets/likeActive.svg';

export default function LikeButton({ liked, count = 0 }) {
  const { postId } = useParams();
  const [isLike, setIsLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const like = useMutation({
    mutationKey: [MUTATION_KEY.like],
    mutationFn: async () => await likeApi({ postId }),
    onSuccess: () => {
      setIsLike(true);
      setLikeCount((prev) => prev + 1);
    },
    onError: (error) => {
      const { status } = error?.response ?? {};

      if (status === 401) {
        alert('로그인 후 이용해주세요');
        return;
      }

      alert('잠시 후 다시 시도해주세요');
    },
  });

  const unlike = useMutation({
    mutationKey: [MUTATION_KEY.unlike],
    mutationFn: async () => await unlikeApi({ postId }),
    onSuccess: () => {
      setIsLike(false);
      setLikeCount((prev) => prev - 1);
    },
    onError: (error) => {
      const { status } = error?.response ?? {};

      if (status === 401) {
        alert('로그인 후 이용해주세요');
        return;
      }

      alert('잠시 후 다시 시도해주세요');
    },
  });

  const onClick = async () => {
    if (isLike) {
      await unlike.mutate();
      return;
    }

    await like.mutate();
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

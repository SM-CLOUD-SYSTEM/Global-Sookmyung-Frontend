import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { like as likeApi, unlike as unlikeApi } from '@apis';

import { MUTATION_KEY } from '@constants';

export default function useLike() {
  const { postId } = useParams();

  const like = useMutation({
    mutationKey: [MUTATION_KEY.like],
    mutationFn: async () => await likeApi({ postId }),
  });

  const unlike = useMutation({
    mutationKey: [MUTATION_KEY.unlike],
    mutationFn: async () => await unlikeApi({ postId }),
  });

  return { like, unlike };
}

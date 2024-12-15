import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { bookmark as bookmarkApi, unbookmark as unbookmarkApi } from '@/apis';

import { MUTATION_KEY } from '@/constants';

export default function useBookmark() {
  const { postId } = useParams();

  const bookmark = useMutation({
    mutationKey: [MUTATION_KEY.scrap],
    mutationFn: async () => await bookmarkApi({ postId }),
  });

  const unbookmark = useMutation({
    mutationKey: [MUTATION_KEY.bookmark],
    mutationFn: async () => await unbookmarkApi({ postId }),
  });

  return { bookmark, unbookmark };
}

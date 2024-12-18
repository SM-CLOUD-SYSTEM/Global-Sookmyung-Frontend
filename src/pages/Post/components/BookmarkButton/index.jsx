import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { bookmark as bookmarkApi, unbookmark as unbookmarkApi } from '@/apis';

import ActionButton from '@pages/Post/components/ActionButton';

import { MUTATION_KEY } from '@/constants';
import { ReactComponent as BookmarkActiveIcon } from '@assets/bookmarkActive.svg';
import { ReactComponent as BookmarkInactiveIcon } from '@assets/bookmark.svg';

export default function BookmarkButton({ bookmarked, count }) {
  const { postId } = useParams();
  const [isBookmark, setIsBookmark] = useState(bookmarked);
  const [bookmarkCount, setBookmarkCount] = useState(count);

  const bookmark = useMutation({
    mutationKey: [MUTATION_KEY.scrap],
    mutationFn: async () => await bookmarkApi({ postId }),
    onSuccess: () => {
      setIsBookmark(true);
      setBookmarkCount((prev) => prev + 1);
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

  const unbookmark = useMutation({
    mutationKey: [MUTATION_KEY.bookmark],
    mutationFn: async () => await unbookmarkApi({ postId }),
    onSuccess: () => {
      setIsBookmark(false);
      setBookmarkCount((prev) => prev - 1);
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
    if (isBookmark) {
      await unbookmark.mutate();
      return;
    }

    await bookmark.mutate();
  };

  return (
    <ActionButton
      isActive={isBookmark}
      onClick={onClick}
      text='북마크'
      count={bookmarkCount}
      InactiveIcon={BookmarkInactiveIcon}
      ActiveIcon={BookmarkActiveIcon}
    />
  );
}

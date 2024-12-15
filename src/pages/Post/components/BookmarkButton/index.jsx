import { useState } from 'react';

import { useBookmark } from '@hooks';
import ActionButton from '@pages/Post/components/ActionButton';

import { ReactComponent as BookmarkActiveIcon } from '@assets/bookmarkActive.svg';
import { ReactComponent as BookmarkInactiveIcon } from '@assets/bookmark.svg';

export default function BookmarkButton({ bookmarked, count }) {
  const { bookmark, unbookmark } = useBookmark();
  const [isBookmark, setIsBookmark] = useState(bookmarked);
  const [bookmarkCount, setBookmarkCount] = useState(count);

  const onBookmark = async () => {
    await bookmark.mutate();
    setIsBookmark(true);
    setBookmarkCount((prev) => prev + 1);
  };

  const onUnbookmark = async () => {
    await unbookmark.mutate();
    setIsBookmark(false);
    setBookmarkCount((prev) => prev - 1);
  };

  const onClick = () => {
    if (isBookmark) {
      onUnbookmark();
      return;
    }

    onBookmark();
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

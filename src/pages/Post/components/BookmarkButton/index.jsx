import { useState } from 'react';

import ActionButton from '@pages/Post/components/ActionButton';

import { ReactComponent as BookmarkActiveIcon } from '@assets/bookmarkActive.svg';
import { ReactComponent as BookmarkInactiveIcon } from '@assets/bookmark.svg';

export default function BookmarkButton({ bookmarked, count }) {
  const [isBookmark, setIsBookmark] = useState(bookmarked);
  const [bookmarkCount, setBookmarkCount] = useState(count);

  const bookmark = () => {
    setIsBookmark(true);
    setBookmarkCount((prev) => prev + 1);
  };

  const unbookmark = () => {
    setIsBookmark(false);
    setBookmarkCount((prev) => prev - 1);
  };

  const onClick = () => {
    if (isBookmark) {
      unbookmark();
      return;
    }

    bookmark();
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

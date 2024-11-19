import { useState } from 'react';

import { ReactComponent as DoubleLeftArrow } from '@assets/doubleLeftArrow.svg';
import { ReactComponent as DoubleRightArrow } from '@assets/doubleRightArrow.svg';
import { ReactComponent as LeftArrow } from '@assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '@assets/rightArrow.svg';

import styles from './Paginator.module.css';

const START_PAGE = 1;
const OFFSET = 10;

export default function Paginator({ page: currentPage, setPage, pageCount }) {
  const [startPage, setStartPage] = useState(START_PAGE);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const viewPages = pages.slice(startPage - 1, startPage - 1 + OFFSET);

  const goToFirst = () => setStartPage(START_PAGE);
  const goToLast = () => setStartPage(pageCount - OFFSET + 1);
  const prev = () => {
    if (startPage - OFFSET < START_PAGE) {
      goToFirst();
      return;
    }

    setStartPage(startPage - OFFSET);
  };
  const next = () => {
    if (startPage + OFFSET > pageCount) {
      goToLast();
      return;
    }

    setStartPage(startPage + OFFSET);
  };

  return (
    <div className={styles.container}>
      <div className={styles.paginator}>
        <DoubleLeftArrow className={styles.arrow} onClick={goToFirst} />
        <div className={styles.middle}>
          <LeftArrow className={styles.arrow} onClick={prev} />
          <ul className={styles.pager}>
            {viewPages.map((page) => (
              <li
                className={`${styles.page} ${currentPage === page && styles.select}`}
                key={page}
                onClick={() => setPage(page)}
              >
                <button>{page}</button>
              </li>
            ))}
          </ul>
          <RightArrow className={styles.arrow} onClick={next} />
        </div>
        <DoubleRightArrow className={styles.arrow} onClick={goToLast} />
      </div>
    </div>
  );
}

import { useState } from 'react';

import { useSearch } from '@hooks';
import { BoardIndex, Post, Profile } from '@components';
import { Category, SearchInput } from '@pages/Search/components';

import { ReactComponent as ManageSearch } from '@assets/manageSearch.svg';
import { SEARCH_POSTS } from '@dummy';

import styles from './Search.module.css';

export default function Search() {
  const { keyword, category, updateCategory, search } = useSearch();

  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('고구마');

  return (
    <section className={styles.container}>
      <Profile />
      <article className={styles.article}>
        <div className={styles.search}>
          <div className={styles.title}>
            <ManageSearch />
            <h2>
              <span className={styles.keyword}>
                "<span className={styles.underline}>{keyword}</span>"
              </span>
              검색 결과입니다.
            </h2>
          </div>
          <SearchInput keyword={keyword} search={search} />
        </div>
        <div className={styles.result}>
          <Category category={category} updateCategory={updateCategory} />
          <div className={styles.board}>
            <BoardIndex />
            <ul>
              {searchResults.map((post) => (
                <Post post={post} />
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

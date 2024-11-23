import { useState } from 'react';

import { ReactComponent as SearchIcon } from '@assets/search.svg';

import styles from './SearchInput.module.css';

export default function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const updateKeyword = (event) => setKeyword(event.target.value);

  const search = () => {};
  const searchOnEnter = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        value={keyword}
        onChange={updateKeyword}
        onKeyDown={searchOnEnter}
        placeholder='"검색어"'
      />
      <button className={styles.icon} onClick={search}>
        <SearchIcon />
      </button>
    </div>
  );
}

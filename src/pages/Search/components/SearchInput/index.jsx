import { useState } from 'react';

import { ReactComponent as SearchIcon } from '@assets/search.svg';

import styles from './SearchInput.module.css';

export default function SearchInput({ keyword, search }) {
  const [value, setValue] = useState('');
  const onChange = (event) => setValue(event.target.value);

  const searchOnEnter = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    search(value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={onChange}
        onKeyDown={searchOnEnter}
        placeholder='"검색어"'
      />
      <button className={styles.icon} onClick={() => search(value)}>
        <SearchIcon />
      </button>
    </div>
  );
}

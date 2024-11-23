import { useState } from 'react';

import { SEARCH_CATEGORY } from '@constants';

import { SEARCH_POSTS } from '@dummy';

export default function useSearch() {
  const [keyword, setKeyword] = useState('');
  const updateKeyword = (value) => setKeyword(value);

  const [category, setCategory] = useState(SEARCH_CATEGORY.all);
  const updateCategory = (value) => setCategory(value);

  const search = (value) => {
    // 검색 api 연결
    updateKeyword(value);
  };

  const results = SEARCH_POSTS;

  return { results, keyword, category, updateCategory, search };
}

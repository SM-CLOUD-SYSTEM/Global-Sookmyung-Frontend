import { useState } from 'react';

import { SEARCH_CATEGORY } from '@constants';

export default function useSearch() {
  const [keyword, setKeyword] = useState('');
  const updateKeyword = (value) => setKeyword(value);

  const [category, setCategory] = useState(SEARCH_CATEGORY.all.value);
  const updateCategory = (value) => setCategory(value);

  const search = (value) => {
    // 검색 api 연결
    updateKeyword(value);
  };

  return { keyword, category, updateCategory, search };
}

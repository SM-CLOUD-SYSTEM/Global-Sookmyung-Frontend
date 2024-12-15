import { authAxios } from '@/axios';

export const getSearchs = async ({ searchWord }) => {
  const response = await authAxios.get(`/posts/search`, {
    params: {
      searchWord,
    },
  });
  return response?.result.data;
};

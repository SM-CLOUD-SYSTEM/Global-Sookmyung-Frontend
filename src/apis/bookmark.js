import { authAxios } from '@/axios';

export const bookmark = async ({ postId }) => {
  const response = await authAxios.post(`/bookmarks/posts/${postId}`);
  return response;
};

export const unbookmark = async ({ postId }) => {
  const response = await authAxios.delete(`/bookmarks/posts/${postId}`);
  return response;
};

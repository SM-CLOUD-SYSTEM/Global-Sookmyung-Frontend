import { authAxios } from '@/axios';

export const getComments = async ({ postId }) => {
  const response = await authAxios.get(`/comments/posts/${postId}`);
  return response?.result.data;
};

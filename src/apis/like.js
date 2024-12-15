import { authAxios } from '@/axios';

export const like = async ({ postId }) => {
  const response = await authAxios.post(`/likes/posts/${postId}`);
  return response;
};

export const unlike = async ({ postId }) => {
  const response = await authAxios.delete(`/likes/posts/${postId}`);
  return response;
};

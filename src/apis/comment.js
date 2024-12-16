import { authAxios } from '@/axios';

export const getComments = async ({ postId }) => {
  const response = await authAxios.get(`/comments/posts/${postId}`);
  return response?.data.data;
};

export const createComment = async ({ postId, content }) => {
  const response = await authAxios.post(`/comments/posts/${postId}`, {
    content,
  });
  return response;
};

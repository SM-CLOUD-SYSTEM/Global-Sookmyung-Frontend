import { authAxios } from '@/axios';

export const getPosts = async ({ postType }) => {
  const response = await authAxios.get('/posts', {
    params: {
      postType,
    },
  });
  return response?.result.data;
};

export const getPost = async ({ postId }) => {
  const response = await authAxios.get(`/posts/${postId}`);
  return response?.result.data;
};

export const createPost = async ({ type, title, content }) => {
  const response = await authAxios.post('/posts', {
    type,
    title,
    content,
  });
  return response;
};

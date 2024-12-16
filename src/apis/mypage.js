import { authAxios } from '@/axios';

import { PATH } from '@constants';

export const mypageList = async ({ pathname }) => {
  if (pathname === PATH.MY_POSTS) {
    return await getMyPosts();
  }
};

export const getMyPosts = async ({ email }) => {
  const response = await authAxios.post('/member/posts');
  return response?.result.data;
};

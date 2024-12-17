import { authAxios } from '@/axios';

import { PATH } from '@constants';

export const mypageList = async ({ pathname }) => {
  if (pathname === PATH.myPost) {
    return await getMyPosts();
  }

  if (pathname === PATH.bookmark) {
    return await getBookmarkedPosts();
  }

  return [];
};

export const getMyPosts = async () => {
  const response = await authAxios.get('/member/posts');
  return response?.data.data;
};

export const getBookmarkedPosts = async () => {
  const response = await authAxios.get('/member/bookmark/posts');
  return response?.data.data;
};

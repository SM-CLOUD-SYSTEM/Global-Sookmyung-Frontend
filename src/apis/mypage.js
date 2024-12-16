import { authAxios } from '@/axios';

import { PATH } from '@constants';

export const mypageList = async ({ pathname }) => {
  if (pathname === PATH.myPost) {
    return await getMyPosts();
  }

  return [];
};

export const getMyPosts = async () => {
  const response = await authAxios.post('/member/posts');
  return response?.data.data;
};

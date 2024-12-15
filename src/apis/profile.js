import { authAxios } from '@/axios';

export const getProfile = async () => {
  const response = await authAxios.get('/member/profile');
  return response?.result.data;
};

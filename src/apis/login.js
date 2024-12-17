import { defaultAxios } from '@/axios';

export const login = async ({ email, password }) => {
  const response = await defaultAxios.post('/auth/login', {
    email,
    password,
  });

  return response?.data.data;
};

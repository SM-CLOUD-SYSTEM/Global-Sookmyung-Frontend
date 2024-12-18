import { defaultAxios } from '@/axios';

export const login = async ({ email, password }) => {
  const response = await defaultAxios.post('/auth/login', {
    email,
    password,
  });

  return response?.data.data;
};

export const logout = () => {
  localStorage.removeItem('access');
  location.reload();
  alert('로그아웃 되었습니다');
};

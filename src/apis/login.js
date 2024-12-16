import { defaultAxios } from '@/axios';

export const login = async ({ email, password }) => {
  try {
    const response = await defaultAxios.post('/auth/login', {
      email,
      password,
    });
    const { accessToken, refreshToken } = response?.result.data;

    localStorage.setItem('access', accessToken);
    localStorage.setItem('refresh', refreshToken);

    location.href = '/';
  } catch (error) {
    const { status } = error?.response ?? {};

    if (status === 404) {
      alert('존재하지 않는 회원입니다.');
    }
  }
};

import { defaultAxios } from '@/axios';

export const sendEmailCode = async ({ email }) => {
  try {
    const response = await defaultAxios.post('/auth/issue/code', { email });

    return { message: '인증코드가 전송되었습니다', isSuccess: true };
  } catch (error) {
    const { status } = error?.response ?? {};

    if (status === 400) {
      return { message: '숙명 이메일만 사용할 수 있습니다', isSuccess: false };
    }

    return { message: '잠시 후 다시 시도해주세요', isSuccess: false };
  }
};

export const checkEmailCode = async ({ email, code }) => {
  try {
    const response = await defaultAxios.post('/auth/verify/email', {
      email,
      code,
    });
    const { accessToken: guestToken } = response?.result.data;

    return {
      message: '인증이 완료되었습니다',
      isSuccess: true,
      guestToken,
    };
  } catch (error) {
    const { status } = error?.response ?? {};

    if (status === 400) {
      return { message: '인증번호가 유효하지 않습니다', isSuccess: false };
    }

    return { message: '잠시 후 다시 시도해주세요', isSuccess: false };
  }
};

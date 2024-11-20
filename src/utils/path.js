import { PATH } from '@constants';

export const getDetailPathname = (pathname) => {
  return pathname === PATH.root ? PATH.allBoard : pathname;
};

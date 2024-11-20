import { PATH } from './path.js';

export const BOARD = Object.freeze({
  [PATH.root]: {
    path: PATH.allBoard,
    name: 'All Students',
    title: 'Sookmyung Women’s Univ. All',
    describe: '우리 학교에 재학 중인 모든 재학생 및 유학생을 만날 수 있습니다.',
  },
  [PATH.allBoard]: {
    path: PATH.allBoard,
    name: 'All Students',
    title: 'Sookmyung Women’s Univ. All',
    describe: '우리 학교에 재학 중인 모든 재학생 및 유학생을 만날 수 있습니다.',
  },
  [PATH.internationalBoard]: {
    path: PATH.internationalBoard,
    name: 'International Students',
    title: 'Sookmyung Women’s Univ. International',
    describe: '우리 학교에 재학 중인 유학생을 만날 수 있습니다.',
  },
});

import App from '@/App.jsx';
import Board from '@pages/Board';
import Search from '@pages/Search';
import Mypage from '@pages/Mypage';

import { PATH } from '@constants';

export const routes = [
  {
    path: PATH.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: PATH.allBoard,
        element: <Board />,
      },
      {
        path: PATH.internationalBoard,
        element: <Board />,
      },
      {
        path: PATH.search,
        element: <Search />,
      },
      {
        path: PATH.mypage,
        element: <Mypage />,
      },
    ],
  },
];

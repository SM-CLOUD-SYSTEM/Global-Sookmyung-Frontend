import { BOARD, PATH } from '@constants';

const BOARDS = Object.values(BOARD);

class Path {
  static convertPathnameForRoot(pathname) {
    return pathname === PATH.root ? PATH.allBoard : pathname;
  }

  static getBoard(pathname) {
    const convertedPath = Path.convertPathnameForRoot(pathname);
    return BOARDS.find(({ path }) => convertedPath.includes(path));
  }

  static getPostPath({ postId }) {
    return `/post/${postId}`;
  }
}

export default Path;

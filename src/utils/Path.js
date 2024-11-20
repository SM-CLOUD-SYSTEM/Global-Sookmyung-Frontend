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

  static getPostPath({ postId, pathname }) {
    const convertedPath = Path.convertPathnameForRoot(pathname);
    const postPath = PATH.post.replace(':postId', postId);

    return `${convertedPath}${postPath}`;
  }
}

export default Path;

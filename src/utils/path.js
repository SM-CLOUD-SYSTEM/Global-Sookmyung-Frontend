import { BOARD, PATH } from '@constants';

class Path {
  static convertPathnameForRoot(pathname) {
    return pathname === PATH.root ? PATH.allBoard : pathname;
  }

  static getPostPath({ postId, pathname }) {
    const currentPath = Path.convertPathnameForRoot(pathname);
    const postPath = PATH.post.replace(':postId', postId);

    return `${currentPath}${postPath}`;
  }
}

export default Path;

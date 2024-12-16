import { mypageList } from '../apis/mypage.js';

export const QUERY_KEY = Object.freeze({
  post: 'post',
  posts: 'posts',
  comments: 'comments',
  profile: 'profile',
  search: 'search',
  mypageList: 'mypageList',
});

export const MUTATION_KEY = Object.freeze({
  like: 'like',
  unlike: 'unlike',
  bookmark: 'bookmark',
  unbookmark: 'unbookmark',
  createPost: 'createPost',
  createComment: 'createComment',
});

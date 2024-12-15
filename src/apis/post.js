import { authAxios } from '@/axios';

export const getPost = async ({ postId }) => {
  // const response = await authAxios.get(`/posts/${postId}`);
  // return response?.result.data;
  return {
    authorName: 'haesa',
    createdAt: '2024.12.15',
    title: '안녕하세요',
    content:
      'ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ',
    isLiked: false,
    likeCount: 12,
    isBookmarked: false,
    bookmarkCount: 55,
  };
};

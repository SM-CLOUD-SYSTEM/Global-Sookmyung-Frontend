import { useParams } from 'react-router-dom';

import { getPost as getPostApi, createPost as createPostApi } from '@apis';

export default function usePost() {
  const { postId } = useParams();

  const getPost = async () => await getPostApi({ postId });

  const createPost = async ({ boardName, title, content }) => {
    const type = boardName.split(' ').join('_').toUpperCase();
    await createPostApi({ type, title, content });
  };

  return { getPost, createPost };
}

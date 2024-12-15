import { ServerErrorFallback } from '@components';

export default function PostsErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error;

  if (status === 401) {
    alert('로그인 후 이용 가능합니다.');
    return null;
  }

  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

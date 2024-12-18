import { ServerErrorFallback } from '@components';

export default function ContentErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error;

  if (status === 401) {
    alert('로그인 후 이용 가능합니다.');
  }

  if (status === 404) {
    alert('존재하지 않는 게시글입니다');
  }

  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

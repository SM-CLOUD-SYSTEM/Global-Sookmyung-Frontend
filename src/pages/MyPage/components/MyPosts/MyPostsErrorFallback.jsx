import { AuthErrorFallback, ServerErrorFallback } from '@components';

export default function MyPostsErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error;

  if (status === 401) {
    return <AuthErrorFallback />;
  }

  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

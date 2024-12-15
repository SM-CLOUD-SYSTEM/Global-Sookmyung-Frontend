import { AuthErrorFallback, ServerErrorFallback } from '@components';

export default function ProfileErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error;

  if (status === 401) {
    return <AuthErrorFallback />;
  }

  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

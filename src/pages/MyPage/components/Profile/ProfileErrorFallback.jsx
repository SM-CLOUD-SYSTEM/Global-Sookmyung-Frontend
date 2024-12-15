import { ServerErrorFallback } from '@components';

export default function ProfileErrorFallback({ error, resetErrorBoundary }) {
  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

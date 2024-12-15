import { ServerErrorFallback } from '@components';
import LoggedOutProfile from '@components/Profile/LoggedOutProfile.jsx';

export default function ProfileErrorFallback({ error, resetErrorBoundary }) {
  const { status } = error;

  if (status === 401) {
    return <LoggedOutProfile />;
  }

  return <ServerErrorFallback reset={resetErrorBoundary} />;
}

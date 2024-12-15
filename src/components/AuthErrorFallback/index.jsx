import { useNavigate } from 'react-router-dom';

import styles from './AuthErrorFallback.module.css';

export default function AuthErrorFallback() {
  return (
    <div className={styles.authError}>
      <div className={styles.errorMessage}>
        <span>로그인이 필요한 서비스입니다</span>
        <span>로그인 후 이용해 주세요</span>
      </div>
    </div>
  );
}

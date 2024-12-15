import { Link } from 'react-router-dom';

import { Button } from '@components';
import { ArrowIndex } from '@pages/SignUp/components';

import { PATH } from '@constants';
import SignupComplete from '@assets/signupComplete.svg';

import styles from './SignUpComplete.module.css';

export default function SignUpComplete({ onPrev }) {
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <ArrowIndex label='학교 인증하기' />
        <ArrowIndex label='기본정보 기입' />
        <ArrowIndex label='회원가입 완료' isSelected />
      </div>
      <div>
        <img src={SignupComplete} alt='signup success' />
        <Link to={PATH.login}>
          <Button className={styles.button}>로그인하러 가기</Button>
        </Link>
      </div>
    </div>
  );
}

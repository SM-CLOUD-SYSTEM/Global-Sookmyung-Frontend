import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components';
import { InputWithReset } from '@pages/Login/components';

import { PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as PersonIcon } from '@assets/person.svg';
import { ReactComponent as KeyIcon } from '@assets/key.svg';

import styles from './Login.module.css';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <div className={styles.login}>
          <div className={styles.input}>
            <InputWithReset
              type='text'
              value={id}
              setValue={setId}
              placeholder='아이디'
              Icon={PersonIcon}
            />
            <InputWithReset
              type='password'
              value={pw}
              setValue={setPw}
              placeholder='비밀번호'
              Icon={KeyIcon}
            />
          </div>
          <div className={styles.button}>
            <Button onClick={() => alert('로그인!')}>로그인</Button>
          </div>
        </div>
        <div className={styles.links}>
          <Link className={styles.link} to={PATH.findId}>
            아이디 | 비밀번호 찾기
          </Link>
          <Link className={styles.link} to={PATH.signUp}>
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { login } from '@apis';

import { Button, InputWithClear } from '@components';

import { PATH } from '@constants';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as PersonIcon } from '@assets/person.svg';
import { ReactComponent as KeyIcon } from '@assets/key.svg';

import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <div className={styles.login}>
          <div className={styles.input}>
            <InputWithClear
              type='text'
              value={email}
              updateValue={(event) => setEmail(event.target.value)}
              clear={() => setEmail('')}
              placeholder='아이디'
              Icon={PersonIcon}
            />
            <InputWithClear
              type='password'
              value={password}
              updateValue={(event) => setPassword(event.target.value)}
              clear={() => setPassword('')}
              placeholder='비밀번호'
              Icon={KeyIcon}
            />
          </div>
          <div className={styles.button}>
            <Button onClick={() => login({ email, password })}>로그인</Button>
          </div>
        </div>
        <div className={styles.links}>
          <Link className={styles.link} to={PATH.signUp}>
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}

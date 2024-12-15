import { useState } from 'react';

import { Button, WhiteButton, InputAction } from '@components';
import {
  ArrowIndex,
  Form,
  Group,
  Message,
  InputActionWithLabel,
} from '@pages/SignUp/components';

import styles from './EmailVerification.module.css';

export default function EmailVerification({
  formData,
  updateFormData,
  onNext,
}) {
  const { email } = formData;
  const [code, setCode] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <ArrowIndex label='학교 인증하기' isSelected />
        <ArrowIndex label='기본정보 기입' />
        <ArrowIndex label='회원가입 완료' />
      </div>

      <Form className={styles.form}>
        <Group>
          <InputActionWithLabel
            name='email'
            label='학교 이메일'
            value={email}
            updateValue={updateFormData}
            placeholder='이메일을 입력해 주세요'
            onClick={() => {
              // 이메일 인증
            }}
            buttonText='입력완료'
          />

          <InputActionWithLabel
            label='인증코드'
            value={code}
            updateValue={(event) => setCode(event.target.value)}
            placeholder='전송된 인증 코드를 입력해 주세요'
            onClick={() => {
              // 인증 코드 확인
            }}
            buttonText='확인'
          />
          <Message text='' condition={undefined} />
        </Group>
      </Form>

      <div className={styles.buttons}>
        <div className={styles.button}>
          <WhiteButton disabled>이전</WhiteButton>
        </div>
        <div className={styles.button}>
          <Button onClick={onNext}> 다음</Button>
        </div>
      </div>
    </div>
  );
}

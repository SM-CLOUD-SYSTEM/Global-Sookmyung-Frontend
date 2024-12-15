import { useState } from 'react';

import { useSignupContext } from '@contexts';

import { Button, WhiteButton, InputAction } from '@components';
import {
  ArrowIndex,
  Form,
  Group,
  Message,
  InputActionWithLabel,
} from '@pages/SignUp/components';

import styles from './EmailVerification.module.css';

export default function EmailVerification({ onNext }) {
  const { formData, updateFormData } = useSignupContext();
  const { isInvalidEmail } = formData;
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailData, setEmailData] = useState();
  const [codeData, setCodeData] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <ArrowIndex label='학교 인증하기' isSelected />
        <ArrowIndex label='기본정보 기입' />
        <ArrowIndex label='회원가입 완료' />
      </div>

      <Form className={styles.form}>
        <Group>
          <div>
            <InputActionWithLabel
              name='email'
              label='학교 이메일'
              value={email}
              updateValue={(event) => setEmail(event.target.value)}
              placeholder='이메일을 입력해 주세요'
              onClick={async () => {
                // const data = await validateEmail();
                // emailData(data);
                updateFormData({
                  target: { name: 'email', value: email },
                });
                updateFormData({
                  target: { name: 'isInvalidEmail', value: true },
                });
              }}
              buttonText='입력완료'
            />
            <Message
              text={emailData?.message}
              condition={emailData?.isSuccess}
            />
          </div>
          <div>
            <InputActionWithLabel
              label='인증코드'
              value={code}
              updateValue={(event) => setCode(event.target.value)}
              placeholder='전송된 인증 코드를 입력해 주세요'
              onClick={async () => {
                // const data = await checkCode();
                // codeData(data);
                updateFormData({
                  target: { name: 'isInvalidEmail', value: false },
                });
              }}
              buttonText='확인'
            />
            <Message text={codeData?.message} condition={codeData?.isSuccess} />
          </div>
        </Group>
      </Form>

      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={onNext}
          disabled={isInvalidEmail}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

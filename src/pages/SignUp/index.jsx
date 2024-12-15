import { useState } from 'react';

import { SignupContextProvider } from '@contexts';

import { useFunnel } from '@hooks';

import {
  BasicInformation,
  EmailVerification,
  SignUpComplete,
} from '@pages/SignUp/pages';

import styles from './SignUp.module.css';

const STEPS = ['학교 인증하기', '기본정보 기입', '회원가입 완료'];

export default function SignUp() {
  const [Funnel, setStep] = useFunnel(STEPS[0]);

  return (
    <SignupContextProvider>
      <section className={styles.signUp}>
        <Funnel>
          <Funnel.Step name={STEPS[0]}>
            <EmailVerification onNext={() => setStep(STEPS[1])} />
          </Funnel.Step>
          <Funnel.Step name={STEPS[1]}>
            <BasicInformation
              onPrev={() => setStep(STEPS[0])}
              onNext={() => setStep(STEPS[2])}
            />
          </Funnel.Step>
          <Funnel.Step name={STEPS[2]}>
            <SignUpComplete />
          </Funnel.Step>
        </Funnel>
      </section>
    </SignupContextProvider>
  );
}

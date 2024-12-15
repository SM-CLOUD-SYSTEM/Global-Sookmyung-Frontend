import { useState } from 'react';

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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    nickname: '',
    isInternational: false,
    nationality: '',
    homeUniversity: '',
  });
  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.signUp}>
      <Funnel>
        <Funnel.Step name={STEPS[0]}>
          <EmailVerification
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep(STEPS[1])}
          />
        </Funnel.Step>
        <Funnel.Step name={STEPS[1]}>
          <BasicInformation
            formData={formData}
            updateFormData={updateFormData}
            onPrev={() => setStep(STEPS[0])}
            onNext={() => setStep(STEPS[2])}
          />
        </Funnel.Step>
        <Funnel.Step name={STEPS[2]}>
          <SignUpComplete
            formData={formData}
            updateFormData={updateFormData}
            onPrev={() => setStep(STEPS[1])}
          />
        </Funnel.Step>
      </Funnel>
    </section>
  );
}

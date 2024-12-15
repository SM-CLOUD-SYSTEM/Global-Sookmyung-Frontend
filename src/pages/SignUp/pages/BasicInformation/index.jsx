import { useState } from 'react';

import { useSignupContext } from '@contexts';
import { Button, CheckCircle, WhiteButton, InputAction } from '@components';
import {
  ArrowIndex,
  Legend,
  Form,
  Group,
  Label,
  InputWithLabel,
  InputActionWithLabel,
  DropdownWithLabel,
  InputWithDate,
} from '@pages/SignUp/components';
import { COUNTRY_LIST, HOME_UNIVERSITY_LIST } from '@constants';

import styles from './BasicInformation.module.css';

export default function BasicInformation({ onPrev, onNext }) {
  const [rePassword, setRePassword] = useState('');
  const { formData, updateFormData } = useSignupContext();
  const {
    email,
    password,
    lastName,
    firstName,
    year,
    month,
    date,
    nickname,
    isInternational,
    nationalityName,
    homeUniversityName,
  } = formData;

  const isValid =
    email &&
    password &&
    lastName &&
    firstName &&
    year &&
    month &&
    date &&
    nickname;

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <ArrowIndex label='학교 인증하기' />
        <ArrowIndex label='기본정보 기입' isSelected />
        <ArrowIndex label='회원가입 완료' />
      </div>
      <div className={styles.form}>
        <Form legend='아이디/비밀번호 설정'>
          <Group>
            <InputWithLabel
              label='아이디'
              defaultValue={email}
              required
              disabled
            />
          </Group>
          <Group>
            <InputWithLabel
              name='password'
              label='비밀번호'
              value={password}
              updateValue={updateFormData}
              placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              required
            />
            <InputWithLabel
              name='rePassword'
              label='비밀번호 재입력'
              value={rePassword}
              updateValue={(event) => setRePassword(event.target.value)}
              placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              required
            />
          </Group>
        </Form>

        <Form legend='기본정보 입력'>
          <Group>
            <InputWithLabel
              name='lastName'
              label='성'
              value={lastName}
              updateValue={updateFormData}
              placeholder='성을 입력해 주세요'
              required
            />
            <InputWithLabel
              name='firstName'
              label='이름'
              value={firstName}
              updateValue={updateFormData}
              placeholder='이름을 입력해 주세요'
              required
            />
            <InputActionWithLabel
              name='nickname'
              label='닉네임'
              value={nickname}
              updateValue={updateFormData}
              placeholder='닉네임을 입력해 주세요'
              onClick={() => {}}
              buttonText='중복확인'
              required
            />
            <div>
              <Label required>생년월일</Label>
              <div className={styles.birthday}>
                <InputWithDate
                  name='year'
                  value={year}
                  updateValue={updateFormData}
                  unit='년'
                />
                <InputWithDate
                  name='month'
                  value={month}
                  updateValue={updateFormData}
                  unit='월'
                />
                <InputWithDate
                  name='date'
                  value={date}
                  updateValue={updateFormData}
                  unit='일'
                />
              </div>
            </div>
            <CheckCircle
              name='isInternational'
              checked={isInternational}
              updateChecked={updateFormData}
            >
              유학생이신가요?
            </CheckCircle>
          </Group>
          {isInternational && (
            <Group>
              <DropdownWithLabel
                label='국적'
                name='nationalityName'
                value={nationalityName}
                options={COUNTRY_LIST}
                updateValue={updateFormData}
                required
              />
              <DropdownWithLabel
                label='본교'
                name='homeUniversityName'
                value={homeUniversityName}
                options={HOME_UNIVERSITY_LIST}
                updateValue={updateFormData}
                required
              />
            </Group>
          )}
        </Form>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <WhiteButton onClick={onPrev}>이전</WhiteButton>
        </div>
        <div className={styles.button}>
          <Button
            onClick={async () => {
              // await signUp({
              //   email,
              //   password,
              //   firstName,
              //   lastName,
              //   birthDate: `${year}-${month}-${date}`,
              //   nickname,
              //   isInternational,
              //   nationalityName,
              //   homeUniversityName,
              // });
              onNext();
            }}
            disabled={!isValid}
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
}

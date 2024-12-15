import { createContext, useContext, useMemo, useState } from 'react';

const SignupContext = createContext();

export function SignupContextProvider({ children }) {
  const [formData, setFormData] = useState({
    isInvalidEmail: true,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    year: '',
    month: '',
    date: '',
    nickname: '',
    isInternational: false,
    nationalityName: '',
    homeUniversityName: '',
  });
  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const value = useMemo(() => ({ formData, updateFormData }), [formData]);

  console.log(formData);
  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export function useSignupContext() {
  return useContext(SignupContext);
}

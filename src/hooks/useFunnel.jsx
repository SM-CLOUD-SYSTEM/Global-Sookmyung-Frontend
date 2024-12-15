import { useState } from 'react';

export default function useFunnel(initialStep) {
  const [step, setStep] = useState(initialStep);

  const Funnel = ({ children }) => {
    const currentStep = children.find(
      (stepElement) => stepElement.props.name === step
    );

    return currentStep;
    // return Object.assign(currentStep, { Step });
  };

  Funnel.Step = Step;

  return [Funnel, setStep];
}

const Step = ({ children }) => {
  return <>{children}</>;
};

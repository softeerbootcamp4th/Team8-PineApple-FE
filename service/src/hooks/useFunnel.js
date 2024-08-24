import React, { Children, isValidElement, useState } from 'react';

function useFunnel(steps, { initialStep } = {}) {
  const [step, setStep] = useState(initialStep ?? steps[0]);

  const Step = ({ children }) => children;

  const Funnel = ({ children }) => {
    const validChildren = Children.toArray(children)
      .filter(isValidElement)
      .filter(child => steps.includes(child.props.name));

    const targetStep = validChildren.find(child => child.props.name === step);

    return targetStep;
  };

  Funnel.Step = Step;

  return [Funnel, setStep];
}

export default useFunnel;

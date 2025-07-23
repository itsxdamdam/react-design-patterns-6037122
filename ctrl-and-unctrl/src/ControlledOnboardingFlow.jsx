import React, { useState } from "react";

export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
  prevFlow
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const goBack = () => {
    prevFlow()
  }


  if (currentIndex >= React.Children.toArray(children).length) {
    onFinish();
    return <h1>Done !</h1>;
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goBack });
  }

  return currentChild;
};

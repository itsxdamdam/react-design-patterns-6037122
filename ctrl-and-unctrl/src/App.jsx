import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
// import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext, goBack }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goBack()}>Back</button>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);

const StepThree = ({ goToNext, goBack }) => (
  <>
    <h1>Congratulations! You qualify for the senior discount!</h1>
    <button onClick={() => goBack()}>Back</button>

    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

const StepFour = ({ goToNext, goBack }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goBack()}>Back</button>

    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const goBack = () => {
    const prevIndex = currentIndex - 1;

    if (currentIndex > 0) {
      setCurrentIndex(prevIndex);
    } else {
      onFinish(updatedData);
    }
  };

  return (
    <>
      {/* <UncontrolledForm /> */}

      <ControlledModal
        shouldShow={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ControlledForm
          initialName="Sahwn"
          initialAge={23}
          initialHairColor="gold"
        />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
        prevFlow={goBack}
        onFinish={() => {
          alert("Done!");
        }}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 65 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;

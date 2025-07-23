import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
// import { UncontrolledForm } from "./UncontrolledForm";

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {/* <UncontrolledForm /> */}

      <ControlledModal shouldShow={showModal} onRequestClose={() => setShowModal(false)}>
        <ControlledForm
          initialName="Sahwn" 
          initialAge={23}
          initialHairColor="gold"
        />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </>
  );
}

export default App;

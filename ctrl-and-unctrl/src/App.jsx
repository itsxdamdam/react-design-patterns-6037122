import { ControlledForm } from "./ControlledForm";
// import { UncontrolledForm } from "./UncontrolledForm";

function App() {
  return (
    <>
      {/* <UncontrolledForm /> */}
      <ControlledForm initialName="Sahwn" initialAge={23} initialHairColor="gold" />
    </>
  );
}

export default App;

import { ControlledForm } from "./ControlledForm"
import { UncontrolledForm } from "./UncontrolledForm"

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm
        initialName="Shaun"
        initialAge={123}
        initialHairColor="Brown" />
    </>
  )
}

export default App

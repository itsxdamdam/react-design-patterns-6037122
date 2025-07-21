import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "green" }}>{message}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={5}>
        <LeftHandComponent message="LEFT!" />
        <RightHandComponent message="RIGHT!" />
      </SplitScreen>
    </>
  );
}

export default App;

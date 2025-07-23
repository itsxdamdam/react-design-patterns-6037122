import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapper = printProps(UserInfo);

function App() {
  return (
    <UserInfoWrapper
      user={{ name: "Saw", age: 44, hairColor: "indigo", hobbies: [] }}
    />
  );
}

export default App;

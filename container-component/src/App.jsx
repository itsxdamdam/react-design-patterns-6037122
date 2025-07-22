import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    <>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceUrl={`/api/users/345`} resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;

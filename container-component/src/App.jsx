import { DataLoader } from "./DataLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getTestData = () => {
  return {
    id: "1234",
    name: "Blah Blah",
    age: 65,
    hairColor: "gold",
    hobbies: ["swimming", "running", "games"],
  };
};

function App() {
  return (
    <>
      <DataLoader getDataFn={getTestData} resourceName="user">
        <UserInfo />
      </DataLoader>

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

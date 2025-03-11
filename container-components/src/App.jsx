import axios from 'axios'
import { CurrentUserLoader } from "./CurrentUserLoader"
import { DataLoader } from "./DataLoader"
import { ResourceLoader } from "./ResourceLoader"
import { UserInfo } from "./UserInfo"
import { UserLoader } from "./UserLoader"

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data
}

const getTestData = () => {
  return {
    id: '12345',
    name: 'Blah blah',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  }
}

function App() {
  return (
    <>
    <DataLoader
      getDataFn={getTestData}
      resourceName="user"
    >
      <UserInfo />
    </DataLoader>
    <ResourceLoader
      resourceUrl="/api/users/345"
      resourceName="user"
    >
      <UserInfo />
    </ResourceLoader>
    <UserLoader userId="345">
      <UserInfo />
    </UserLoader>
    </>
  )
}

export default App

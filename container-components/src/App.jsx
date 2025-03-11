import { CurrentUserLoader } from "./CurrentUserLoader"
import { ResourceLoader } from "./ResourceLoader"
import { UserInfo } from "./UserInfo"
import { UserLoader } from "./UserLoader"

function App() {
  return (
    <>
    <ResourceLoader
      resourceUrl={`/api/users/345`}
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

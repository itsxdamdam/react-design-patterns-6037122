import { useResource } from "./useResource";
import { useUser } from "./useUser";

export const UserInfo = ({ userId }) => {
  // const { isLoading, user } = useUser(userId);
  const { isLoading, data: user} = useResource("/users/" + userId, {})

  if (isLoading) {
    return <p>Loadinf...</p>;
  }
  const { name, age, hairColor, hobbies } = user;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

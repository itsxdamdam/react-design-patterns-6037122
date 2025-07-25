import { useEffect } from "react";
import { useState } from "react";

export const useUser = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadedUser = {
      id: userId,
      name: "John Doe",
      age: 54,
      hairColor: "brown",
      hobbies: ["swimming", "bicycling", "video games"],
    };
    setUser(loadedUser);
    setIsLoading(false);
  }, []);

  return { isLoading, user };
};

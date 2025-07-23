import React, { useState, useEffect } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      setUser({ id: userId, name: "Sekkkss", age: 29, hairColor: "yellow", hobbies: [] });
    }, []);

    if (!user) {
      return <p>Loading...</p>;
    }

    return <Component {...props} user={user} />;
  };
};

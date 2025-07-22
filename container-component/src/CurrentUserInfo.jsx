import React, { useEffect, useState } from "react";
import { UserInfo } from "./UserInfo";
import axios from "axios";

export const CurrentUserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("api/current-user");
      setUser(response.data);
    })();
  }, []);

  return user && <UserInfo user={user} />;
};

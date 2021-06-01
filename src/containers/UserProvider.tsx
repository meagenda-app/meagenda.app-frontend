import { parseCookies, setCookie } from "nookies";
import React, { ReactNode, useEffect, useState } from "react";

import { User, UserContext } from "../contexts/User";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [userData, setUserData] = useState<User>({
    loading: true,
    user: null,
    theme: "dark",
    leftMenuExpanded: true,
  });

  function setUser(user: User) {
    const userUpdated = {
      ...userData,
      ...user,
    } as User;

    setUserData(userUpdated);

    setCookie(undefined, "meagenda.user", JSON.stringify(userUpdated), {
      maxAge: 60 * 60 * 1, // 1 hour
    });
  }

  useEffect(() => {
    const { "meagenda.user": user } = parseCookies();

    if (user) {
      setUser({
        ...JSON.parse(user),
        loading: false,
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: userData,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

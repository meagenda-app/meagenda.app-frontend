import React from "react";
import { DefaultTemplate } from "../../components/Templates/Default";
import { useUser } from "../../hooks/User";

export default function Login() {
  console.log("render Login");
  const {
    user: { leftMenuExpanded },
    setUser,
  } = useUser();

  return (
    <DefaultTemplate
      handleLeftMenu={() =>
        setUser({
          leftMenuExpanded: !leftMenuExpanded,
        })
      }
      leftMenuExpanded={leftMenuExpanded}
      persistentLeftMenu={false}
    >
      <h1>Login</h1>
    </DefaultTemplate>
  );
}

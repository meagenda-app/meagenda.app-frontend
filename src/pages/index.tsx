import React from "react";

import { DefaultTemplate } from "../components/Templates/Default";
import { useUser } from "../hooks/User";

export default function Index() {
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
      index
    </DefaultTemplate>
  );
}

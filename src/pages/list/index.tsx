import React from "react";

import { DefaultTemplate } from "../../components/Templates/Default";
import Teste from "../../components/Teste";
import { useUser } from "../../hooks/User";

export default function List() {
  console.log("render List");
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
      List
      <Teste />
    </DefaultTemplate>
  );
}

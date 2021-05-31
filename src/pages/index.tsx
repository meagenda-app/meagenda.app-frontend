import React from "react";
import { DefaultTemplate } from "../components/Templates/Default";

export default function Index() {
  return (
    <DefaultTemplate
      handleLeftMenu={() => {}}
      leftMenuExpanded={true}
      persistentLeftMenu={false}
    >
      teste
    </DefaultTemplate>
  );
}

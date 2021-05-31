import React from "react";

export interface DefaultTemplateProps {
  children: React.ReactNode;
  leftMenuExpanded?: boolean;
  persistentLeftMenu?: boolean;
  handleLeftMenu?: () => void;
}

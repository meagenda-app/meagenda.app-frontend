import React from "react";

export interface NavBarProps {
  persistentLeftMenu?: boolean;
  leftMenuExpanded?: boolean;
  handleMenuLeft?: () => void;
  title?: string;
  children?: React.ReactNode;
}

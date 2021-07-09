import React from "react";

export interface RightMenuProps {
  children: React.ReactNode;
  expanded: boolean;
  handleRightMenu?: () => void;
}

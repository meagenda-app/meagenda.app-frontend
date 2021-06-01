import React from "react";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: string | number;
  value: string | number;
}

export default function FeatureTabs(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

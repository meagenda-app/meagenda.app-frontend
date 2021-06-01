import Box from "@material-ui/core/Box";
import React from "react";

export interface FeatureScheduleRegisterTabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export function FeatureScheduleRegisterTabPanel(
  props: FeatureScheduleRegisterTabPanelProps
) {
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

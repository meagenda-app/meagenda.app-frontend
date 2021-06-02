import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { FeatureScheduleRegisterProps, Schedule } from "./types";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FeatureScheduleRegisterTabPanel } from "./FeatureTabs";
import { useStyles } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormScheduleRegister from "../form/ScheduleRegister";

const FeatureScheduleRegister = ({
  externalCallback,
  data: { startDate, endDate, clerkId, id, establishment },
}: FeatureScheduleRegisterProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<Schedule>();

  const handleSuccess = useCallback(() => {
    setLoading(true);
    externalCallback(); // close right menu
  }, []);

  const handleOpen = useCallback(
    async (id) => {
      try {
        // const response = await FeatureScheduleRegisterRequest(id);
        const response = {
          scheduling: {},
        };

        if (response) {
          setSchedule(response.scheduling);
          setLoading(false);
        }
      } catch (e) {
        alert("deu ruim");
      }
    },
    [id]
  );

  useEffect(() => {
    if (id) {
      handleOpen(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleChange = useCallback((event: ChangeEvent, newValue: number) => {
    setValue(newValue);
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.root}>
          <div className={classes.toolbar}>
            <div></div>
            <IconButton onClick={externalCallback}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <AppBar position="static" color="transparent" elevation={0}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                label="Agendamento"
                id={`scrollable-auto-tab-0`}
                aria-controls={`scrollable-auto-tabpanel-0`}
              />
            </Tabs>
          </AppBar>
          <Divider />
          <FeatureScheduleRegisterTabPanel value={value} index={0}>
            <FormScheduleRegister
              externalCallback={handleSuccess}
              initialValues={
                schedule
                  ? {
                      ...schedule,
                      establishment,
                    }
                  : {
                      startDate,
                      endDate,
                      clerk: { id: clerkId },
                      establishment,
                    }
              }
            />
          </FeatureScheduleRegisterTabPanel>
        </div>
      )}
    </>
  );
};

export default FeatureScheduleRegister;

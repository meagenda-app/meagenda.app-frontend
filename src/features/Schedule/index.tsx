import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  DateNavigator,
  Scheduler,
  Toolbar,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useCallback, useEffect, useState } from "react";
import { useStyles } from "./styles";
import { FeatureScheduleProps } from "./types";

const FeatureSchedule = ({ handleSelect }: FeatureScheduleProps) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    currentDate: new Date(),
    data: [],
  });

  const list = useCallback(async () => {
    setLoading(false);

    try {
      //   const response = await programFeatureScheduleRequest({
      //     skip: 0,
      //     take: 10,
      //   });
      //   if (response) {
      //     setState({
      //       currentDate: new Date(),
      //       data: response.schedulings,
      //     });
      //     setLoading(false);
      //   }
    } catch (e) {
      alert("deu ruim");
    }
  }, []);

  useEffect(() => {
    list();
  }, []);

  const Register = ({ data = undefined, ...props }) => {
    let Component;
    let additionalData;

    if (data?.id) {
      Component = Appointments.Appointment;
      additionalData = data;
    } else {
      Component = WeekView.TimeTableCell;
      additionalData = props;
    }

    return (
      <Component
        {...props}
        onClick={() => {
          handleSelect(additionalData);
        }}
      >
        <>{props.children}</>
      </Component>
    );
  };

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <Scheduler data={state.data} locale="pt-BR">
          <ViewState currentDate={state.currentDate} />

          <Toolbar />
          <DateNavigator />
          <ViewState currentDate={state.currentDate} />
          <WeekView
            startDayHour={6}
            endDayHour={22}
            cellDuration={30}
            timeTableCellComponent={Register}
          />
          <Appointments appointmentComponent={Register} />
        </Scheduler>
      )}
    </>
  );
};

export default FeatureSchedule;

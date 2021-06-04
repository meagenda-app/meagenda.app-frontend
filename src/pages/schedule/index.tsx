import React, { useCallback, useState } from "react";
import { DefaultTemplate } from "../../components/Templates/Default";
import FeatureSchedule from "../../features/Schedule";
import { useUser } from "../../hooks/User";
import { format } from "date-fns";
import { RightMenu } from "../../components/RightMenu";
import FeatureScheduleRegister from "../../features/ScheduleRegister";

export interface callendarPlugin {
  endDate: string;
  startDate: string;
}

export default function Schedule() {
  const [additionalData, setAdditionalData] = useState<callendarPlugin>();
  const [rightMenu, setRightMenu] = useState<boolean>(false);

  const {
    user: { leftMenuExpanded },
    setUser,
  } = useUser();

  const handleSelect = useCallback(
    ({ startDate, endDate, ...rest }: callendarPlugin) => {
      setAdditionalData({
        ...rest,
        startDate: format(new Date(startDate), "yyyy-MM-dd HH:mm:ss"),
        endDate: format(new Date(endDate), "yyyy-MM-dd HH:mm:ss"),
      });

      handleRightMenu();
    },
    [rightMenu]
  );

  const handleRightMenu = useCallback(() => {
    setRightMenu(!rightMenu);
  }, [rightMenu]);

  const handleSuccess = useCallback(() => {
    setRightMenu(!rightMenu);
  }, [rightMenu]);

  return (
    <DefaultTemplate
      handleLeftMenu={() =>
        setUser({
          leftMenuExpanded: !leftMenuExpanded,
        })
      }
      leftMenuExpanded={leftMenuExpanded}
      persistentLeftMenu={true}
      title="Agenda"
    >
      <FeatureSchedule handleSelect={handleSelect} />

      <RightMenu expanded={rightMenu} handleRightMenu={handleRightMenu}>
        <FeatureScheduleRegister
          data={{
            clerkId: "aaaaa",
            establishment: "23123",
            ...additionalData,
          }}
          externalCallback={handleSuccess}
        />
      </RightMenu>
    </DefaultTemplate>
  );
}

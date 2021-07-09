import { format } from "date-fns";
import React, { useCallback, useState } from "react";
import { RightMenu } from "../../packages/structure/RightMenu";
import { DefaultTemplate } from "../../packages/structure/Default";
import FeatureSchedule from "../../packages/schedule/FeatureSchedule";
import FeatureScheduleRegister from "../../packages/schedule/FeatureScheduleRegister";

export interface callendarPlugin {
  endDate: string;
  startDate: string;
}

export default function Schedule() {
  const [additionalData, setAdditionalData] = useState<callendarPlugin>();
  const [rightMenu, setRightMenu] = useState<boolean>(false);

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
    <DefaultTemplate persistentLeftMenu={true} title="Agenda">
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

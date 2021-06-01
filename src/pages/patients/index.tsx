import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { RightMenu } from "../../components/RightMenu";
import { DefaultTemplate } from "../../components/Templates/Default";
import FeatureListPatients from "../../features/ListPatients";
import { useUser } from "../../hooks/User";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Patients() {
  const classes = useStyles();
  const {
    user: { leftMenuExpanded },
    setUser,
  } = useUser();

  const [rightMenu, setRightMenu] = useState<boolean>(false);
  const router = useRouter();
  const {
    query: { id: userId },
  }: any = router;

  const handleRightMenu = useCallback(() => {
    setRightMenu(!rightMenu);
    router.push(`/patients`);
  }, [rightMenu]);

  const handleSelect = useCallback(
    ({ id }) => {
      router.push(`/patients?id=${id}`);
    },
    [rightMenu]
  );

  useEffect(() => {
    if (userId && !rightMenu) {
      setRightMenu(!rightMenu);
    }
  }, [userId]);

  return (
    <DefaultTemplate
      handleLeftMenu={() =>
        setUser({
          leftMenuExpanded: !leftMenuExpanded,
        })
      }
      leftMenuExpanded={leftMenuExpanded}
      persistentLeftMenu={false}
    >
      <RightMenu expanded={rightMenu} handleRightMenu={handleRightMenu}>
        {!!userId && <>teste {userId}</>}
      </RightMenu>
      <FeatureListPatients handleSelect={handleSelect} />

      <Fab
        aria-label="Add"
        className={classes.fab}
        color="primary"
        onClick={() => handleSelect({ id: "create" })}
      >
        <AddIcon />
      </Fab>
    </DefaultTemplate>
  );
}

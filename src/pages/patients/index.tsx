import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { RightMenu } from "../../packages/structure/RightMenu";
import { DefaultTemplate } from "../../packages/structure/Default";
import FeatureListPatients from "../../packages/patients/FeatureListPatients";
import FeatureProfile from "../../packages/patients/FeatureProfile";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Patients() {
  const classes = useStyles();

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

  const handleSuccess = useCallback(() => {
    setRightMenu(!rightMenu);
    router.push(`/patients`);
  }, [rightMenu]);

  useEffect(() => {
    if (userId && !rightMenu) {
      setRightMenu(!rightMenu);
    }
  }, [userId]);

  return (
    <DefaultTemplate persistentLeftMenu={false} title="Pacientes">
      <RightMenu expanded={rightMenu} handleRightMenu={handleRightMenu}>
        {!!userId && (
          <FeatureProfile
            data={{
              id: userId,
            }}
            externalCallback={handleSuccess}
          />
        )}
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

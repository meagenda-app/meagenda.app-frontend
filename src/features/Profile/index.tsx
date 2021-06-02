import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountIcon from "@material-ui/icons/AccountCircle";
import React, { useState, useEffect, useCallback } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./styles";
import FeatureTabs from "./FeatureTabs";
import { Patient } from "../../types/Patient";
import FormProfileGeneralData from "../form/ProfileGeneralData";

function a11yProps(index: string | number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const FeatureProfile = ({ externalCallback, data: { id } }) => {
  const classes = useStyles();

  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState<Patient>();

  const handleSuccess = useCallback(() => {
    setLoading(true);
    externalCallback(); // close right menu
  }, []);

  const handleOpen = useCallback(
    async (id) => {
      try {
        setPatient({
          id: "123321123",
          firstName: "Henrique",
          lastName: "Weiand",
          email: "henriqueweiand@gmail.com",
        });
        setLoading(false);
      } catch (e) {
        alert("deu ruim");
      }
    },
    [id]
  );

  useEffect(() => {
    if (id) {
      if (id === "create") {
        setLoading(false);
      } else {
        handleOpen(id);
      }
    }
  }, [id]);

  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setTab(newValue);
  };

  // const handleSelectMedicalRecords = useCallback((handbook) => {
  //   setCreateMedicalRecord(true);
  //   setMedicalRecord(handbook);
  // }, []);
  //   const handleSelectMedicalRecords = (handbook) => {
  //     setCreateMedicalRecord(true);
  //     setMedicalRecord(handbook);
  //   };

  return (
    <>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.root}>
          <div className={classes.toolbar}>
            <List dense>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={id === "create" ? "Novo" : patient.firstName}
                />
              </ListItem>
            </List>
            <IconButton onClick={externalCallback}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <AppBar position="static" color="transparent" elevation={0}>
            <Tabs
              value={tab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Dados" {...a11yProps(0)} />
              <Tab
                disabled={id === "create"}
                label="Prontuários"
                {...a11yProps(1)}
              />
              <Tab
                disabled={id === "create"}
                label="Anexos"
                {...a11yProps(2)}
              />
              <Tab
                disabled={id === "create"}
                label="Acesso"
                {...a11yProps(3)}
              />
            </Tabs>
          </AppBar>
          <Divider />
          <FeatureTabs value={tab} index={0}>
            <FormProfileGeneralData
              externalCallback={handleSuccess}
              initialValues={patient}
            />
          </FeatureTabs>
          {id !== "create" && (
            <>
              <FeatureTabs value={tab} index={1}>
                medical records
                {/* <div className={classes.space}>
                  {createMedicalRecord ? (
                    <ProgramFeatureProfileMedicalRecordsForm
                      initialValues={{
                        account: patient,
                        ...medicalRecord,
                      }}
                      externalCallback={() => {
                        setMedicalRecord({});
                        setCreateMedicalRecord(false);
                        programFeatureMedicalRecordListRequestRef.current.list();
                      }}
                    />
                  ) : (
                    <Button
                      data-test="cancel"
                      type="button"
                      onClick={() => setCreateMedicalRecord(true)}
                      variant="outlined"
                      fullWidth
                      color="inherit"
                      size="large"
                      disabled={loading}
                    >
                      Cadastrar novo
                    </Button>
                  )}
                </div> */}
                {/* <ProgramFeatureProfileMedicalRecordsList
                  ref={programFeatureMedicalRecordListRequestRef}
                  handleSelect={(e: Handbook) => handleSelectMedicalRecords(e)}
                  initialValues={{ account: { id: patient.id } }}
                /> */}
              </FeatureTabs>
              <FeatureTabs value={tab} index={2}>
                attachments
                {/* <ProgramFeatureProfileAttachments /> */}
              </FeatureTabs>
              <FeatureTabs value={tab} index={3}>
                access
                {/* <ProgramFeatureProfileAccess /> */}
              </FeatureTabs>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FeatureProfile;

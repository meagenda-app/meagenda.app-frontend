import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useCallback, useEffect, useState } from "react";
import { FeatureMedicalRecordsListProps } from "./types";
import { useStyles } from "./styles";

const FeatureMedicalRecordsList = ({
  handleSelect,
}: FeatureMedicalRecordsListProps) => {
  const classes = useStyles();
  const [data, setData] = useState<{
    loading: boolean;
    data: any;
  }>({
    loading: true,
    data: [],
  });

  const list = useCallback(async () => {
    setData((currentData) => ({
      ...currentData,
      loading: true,
    }));

    try {
      const response = [
        {
          date: "1991-10-12",
          description:
            "teste teste teste teste teste teste teste teste teste teste teste teste ",
        },
      ];
      //   const response = await programFeatureMedicalRecordsListRequest({
      //     skip: 0,
      //     take: 15,
      //   });
      setData((currentData) => ({
        ...currentData,
        data: response,
        loading: false,
      }));
    } catch (e) {
      alert("deu ruim");
    }
  }, []);

  useEffect(() => {
    list();
  }, []);

  return (
    <>
      {data.loading ? (
        `carregando`
      ) : (
        <List>
          {data.data?.map((handbook: any) => (
            <Accordion elevation={1}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {handbook?.date}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.content}>
                  {handbook?.description}
                </Typography>
              </AccordionDetails>

              <Divider />
              <AccordionActions>
                <Button onClick={() => handleSelect(handbook)} size="small">
                  Editar
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
        </List>
      )}
    </>
  );
};

export default FeatureMedicalRecordsList;

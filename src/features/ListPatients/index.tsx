import React, { useCallback, useEffect, useState } from "react";
import List from "@material-ui/core/List";

import PatientListItem from "../../components/PatientListItem";
import { FeatureListPatientsProps } from "./types";

const FeatureListPatients = ({ handleSelect }: FeatureListPatientsProps) => {
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
          id: "123321123",
          firstName: "Henrique",
          lastName: "Weiand",
          email: "henriqueweiand@gmail.com",
        },
      ];
      //   const response = await programFeatureListPatientsRequest({
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
          {data.data?.map((patient) => (
            <PatientListItem
              key={patient.id}
              data={patient}
              onClick={handleSelect}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default FeatureListPatients;

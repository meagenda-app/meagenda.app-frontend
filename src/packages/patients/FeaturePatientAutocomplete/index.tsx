import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { Patient, FeaturePatientAutocompleteProps } from "./types";
import TextFieldWithEdit from "../../structure/TextFieldWithEdit";

const FeaturePatientAutocomplete = ({
  handleSelect,
  defaultValue,
  label,
  ...rest
}: FeaturePatientAutocompleteProps) => {
  const [options, setOptions] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const fetch = async (value: string) => {
    if (value.length) {
      try {
        setLoading(true);
        // const { accounts } = await programFeaturePatientAutocomplete({
        //   skip: 0,
        //   take: 10,
        //   search: value,
        // });

        // if (accounts.length > 0) {
        //   setOptions(accounts);
        // }
      } catch (error) {
        setOptions([]);
      } finally {
        setLoading(false);
      }
    } else {
      setOptions([]);
    }
  };

  const handleInputChange = (_: any, value: string) => {
    setOptions([]);
    fetch(value);
  };

  return (
    <>
      {defaultValue && !edit ? (
        <TextFieldWithEdit
          label={label}
          defaultValue={defaultValue}
          handleEdit={setEdit}
        />
      ) : (
        <Autocomplete
          id={`asynchronous-patient-autocomplete-${label}`}
          style={{ width: "100%" }}
          noOptionsText={"Digite para pesquisar"}
          loadingText={"Buscando"}
          onChange={(_, value) => handleSelect(value as Patient)}
          getOptionSelected={(option, value) => option?.id === value?.id}
          getOptionLabel={(option) => option?.firstName}
          onInputChange={handleInputChange}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              fullWidth
              label={label}
              color="secondary"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default FeaturePatientAutocomplete;

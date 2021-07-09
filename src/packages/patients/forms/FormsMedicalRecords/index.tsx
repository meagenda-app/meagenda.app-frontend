import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

import { FormsMedicalRecordsProps } from "./types";
import { formValidation } from "./validation";

const FormsMedicalRecords = ({
  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    genre: "",
    dateOfBirth: "",
  },
  externalCallback,
}: FormsMedicalRecordsProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    setLoading(true);

    try {
      // await programFeatureProfileMedicalRecordsFormRequest({
      //   data: values,
      //   id: initialValues.id,
      // });
      setLoading(false);
      externalCallback();
    } catch (e) {
      alert("Erro ao tentar salvar");
    }
  };

  const onCancel = async () => {
    setLoading(true);

    try {
      // await programFeatureMedicalRecordsCancelRequest(initialValues);
      setLoading(false);
      externalCallback();
    } catch (e) {
      alert("Erro ao remover");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidation}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      {({ errors }) => {
        return (
          <Form data-test="medical-records-form">
            <Grid container item spacing={3}>
              <Grid container item xs={12}>
                <Field name="description">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      multiline
                      rows={4}
                      data-test="description"
                      type="text"
                      label="Descrição"
                      fullWidth
                      color="secondary"
                      error={!!errors.description}
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                {initialValues?.id && (
                  <>
                    <Grid item xs={3}>
                      <Button
                        data-test="cancel"
                        type="button"
                        onClick={onCancel}
                        variant="contained"
                        fullWidth
                        size="small"
                        disabled={loading}
                      >
                        {loading ? <CircularProgress size={24} /> : "Excluir"}
                      </Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                  </>
                )}
                <Grid item xs={initialValues?.id ? 8 : 12}>
                  <Button
                    data-test="submit"
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="small"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Salvar"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormsMedicalRecords;

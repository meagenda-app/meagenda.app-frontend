import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formValidation } from "./validation";
import { FormsChangeNetwokingProps } from "./types";
import MenuItem from "@material-ui/core/MenuItem";

const FormsChangeNetwoking = ({
  initialValues,
  externalCallback,
}: FormsChangeNetwokingProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    setLoading(true);

    try {
      // await programFormsChangeNetwokingRequest({
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
      // await programFeatureScheduleCancelRequest(initialValues);
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
    >
      {({ errors, setFieldValue }) => {
        return (
          <Form data-test="schedule-form">
            <Grid container item xs={12} spacing={3}>
              <Grid container item xs={12}>
                <Field name="network">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      id="select"
                      label="Rede"
                      select
                      fullWidth
                      color="secondary"
                      error={!!errors?.network}
                      value={"10"}
                    >
                      <MenuItem value="10">Rede Mesquita</MenuItem>
                      <MenuItem value="20">Odontobaby</MenuItem>
                    </TextField>
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="store">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      id="select"
                      label="Estabelecimento"
                      select
                      fullWidth
                      color="secondary"
                      error={!!errors?.network}
                      value={"10"}
                    >
                      <MenuItem value="10">Rede Mesquita</MenuItem>
                      <MenuItem value="20">Odontobaby</MenuItem>
                    </TextField>
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  <Button
                    data-test="submit"
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Trocar"}
                  </Button>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Button
                    data-test="cancel"
                    type="button"
                    onClick={onCancel}
                    variant="contained"
                    fullWidth
                    color="secondary"
                    size="large"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Cancelar"}
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

export default FormsChangeNetwoking;

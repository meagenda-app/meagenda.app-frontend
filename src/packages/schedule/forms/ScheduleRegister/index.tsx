import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formValidation } from "./validation";
import { Patient, Schedule, FormScheduleRegisterProps } from "./types";
import FeaturePatientAutocomplete from "../../../patients/FeaturePatientAutocomplete";

const FormScheduleRegister = ({
  initialValues,
  externalCallback,
}: FormScheduleRegisterProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: Schedule) => {
    setLoading(true);

    try {
      // await programFormScheduleRegisterRequest({
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
              <Grid container item xs={6}>
                <Field name="startDate">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="startDate"
                      disabled
                      type="text"
                      label="Inicio"
                      fullWidth
                      color="secondary"
                      error={!!errors.startDate}
                      helperText={"Este campo não pode ser editado"}
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={6}>
                <Field name="endDate">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="endDate"
                      disabled
                      type="text"
                      label="Fim"
                      fullWidth
                      color="secondary"
                      error={!!errors.endDate}
                      helperText={"Este campo não pode ser editado"}
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="title">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="title"
                      type="text"
                      label="Título"
                      variant="filled"
                      fullWidth
                      color="secondary"
                      error={!!errors.title}
                      helperText={errors.title}
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="patient">
                  {({
                    field: { value, ...rest },
                  }: {
                    field: {
                      value: Partial<Patient>;
                    };
                  }) => (
                    <FeaturePatientAutocomplete
                      {...rest}
                      defaultValue={value?.firstName}
                      label="Paciente"
                      handleSelect={(e: Patient) => setFieldValue("patient", e)}
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="professional">
                  {({
                    field: { value, ...rest },
                  }: {
                    field: {
                      value: Partial<Patient>;
                    };
                  }) => (
                    <FeaturePatientAutocomplete
                      {...rest}
                      defaultValue={value?.firstName}
                      label="Profissional"
                      handleSelect={(e: Patient) =>
                        setFieldValue("professional", e)
                      }
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="description">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="description"
                      type="text"
                      label="Descrição"
                      variant="filled"
                      fullWidth
                      color="secondary"
                      error={!!errors.description}
                      helperText={errors.description}
                      rows={6}
                      multiline
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={initialValues?.id ? 8 : 12}>
                  <Button
                    data-test="submit"
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Salvar"}
                  </Button>
                </Grid>
                {initialValues?.id && (
                  <>
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
                  </>
                )}
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormScheduleRegister;

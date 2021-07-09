import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormProfileGeneralDataProps } from "./types";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formValidation } from "./validation";
import { useUser } from "../../../../contexts/hooks/User";

const FormProfileGeneralData = ({
  initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    genre: "",
    dateOfBirth: "",
  },
  externalCallback,
}: FormProfileGeneralDataProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUser();

  const onSubmit = async (values: any) => {
    setLoading(true);

    try {
      // await FormProfileGeneralDataRequest({
      //   data: values,
      //   id: values?.id,
      // });

      setLoading(false);
      externalCallback();
    } catch (e) {
      console.log(e);
      alert("Não foi possivel salvar");
    }
  };

  return (
    <>
      <div
        type="button"
        onClick={() => {
          console.log("teste");
          setUser({ token: "teste" });
        }}
      >
        teste
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => {
          return (
            <Form data-test="profile-data-form">
              <Grid container item xs={12} spacing={3}>
                <Grid container item xs={12}>
                  <Field name="firstName">
                    {({ field }: { field: string }) => (
                      <TextField
                        {...field}
                        data-test="firstName"
                        type="text"
                        label="Primeiro nome"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid container item xs={12}>
                  <Field name="lastName">
                    {({ field }: { field: string }) => (
                      <TextField
                        {...field}
                        data-test="lastName"
                        type="text"
                        label="Sobrenome"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid container item xs={12}>
                  <Field name="email">
                    {({ field }: { field: string }) => (
                      <TextField
                        {...field}
                        data-test="email"
                        type="text"
                        label="E-Mail"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid container item xs={12}>
                  <Field name="genre">
                    {({ field }: { field: string }) => (
                      <TextField
                        {...field}
                        data-test="genre"
                        label="Gênero"
                        variant="filled"
                        color="secondary"
                        fullWidth
                        error={!!errors.genre}
                        helperText={errors.genre}
                        type="text"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid container item xs={12}>
                  <Field name="dateOfBirth">
                    {({ field }: { field: string }) => (
                      <TextField
                        {...field}
                        data-test="dateOfBirth"
                        label="Data de aniversário"
                        variant="filled"
                        color="secondary"
                        fullWidth
                        error={!!errors.dateOfBirth}
                        helperText={errors.dateOfBirth}
                        type="text"
                      />
                    )}
                  </Field>
                </Grid>
                {/* <Grid container item xs={12}>
                <Field name="CPF">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="password"
                      label="Password"
                      variant="filled"
                      color="secondary"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password}
                      type="text"
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="RG">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="password"
                      label="Password"
                      variant="filled"
                      color="secondary"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password}
                      type="text"
                    />
                  )}
                </Field>
              </Grid>
              <Grid container item xs={12}>
                <Field name="Data de nascimento">
                  {({ field }: { field: string }) => (
                    <TextField
                      {...field}
                      data-test="password"
                      label="Password"
                      variant="filled"
                      color="secondary"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password}
                      type="text"
                    />
                  )}
                </Field>
              </Grid> */}
                <Grid container item xs={12}>
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
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormProfileGeneralData;

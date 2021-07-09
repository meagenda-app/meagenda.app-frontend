import * as Yup from 'yup';

const formValidation = Yup.object().shape({
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Campo obrigatório'),
  genre: Yup.string().required('Campo obrigatório'),
  dateOfBirth: Yup.string().required('Campo obrigatório'),
});

export { formValidation };

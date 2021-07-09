import * as Yup from 'yup';

const formValidation = Yup.object().shape({
  startDate: Yup.string().required('Campo obrigatório'),
  endDate: Yup.string().required('Campo obrigatório'),
  title: Yup.string().required('Campo obrigatório'),
  patient: Yup.string().required('Campo obrigatório'),
  professional: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
});

export { formValidation };

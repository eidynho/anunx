import * as yup from 'yup'

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  password: yup.string()
    .required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema,
}
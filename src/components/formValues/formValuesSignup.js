import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(2, 'Mínimo de 2 caracteres')
    .max(30, 'Máximo de 30 caracteres')
    .required('Campo obrigatório'),

  email: yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  password: yup.string()
    .min(6, 'Senha mínima de 6 caracteres')
    .required('Campo obrigatório'),

  confirmPassword: yup.string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password'), null], 'A confirmação de senha precisa ser igual a senha'),
})

export {
  initialValues,
  validationSchema,
}
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import axios from 'axios'

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@mui/material'

import { initialValues, validationSchema } from './formValues'
import TemplateDefault from '../../../src/templates/Default'
import theme from '../../../src/theme'
import useToasty from '../../../src/contexts/Toasty'

const Signup = () => {
  const { setToasty } = useToasty()
  const router = useRouter()

  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso'
      })

      //redirecionar para página de login
      router.push('/auth/signin')
    }
  }

  return (
      <TemplateDefault>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {
            ({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => {

              return (
                <form onSubmit={handleSubmit}>
                  <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center">
                      Crie sua conta
                    </Typography>
                    <Typography component="h2" variant="h5" align="center">
                      E anuncie para todo Brasil!
                    </Typography>
                  </Container>

                  <Container maxWidth="md">
                    <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>

                      <FormControl error={errors.name && touched.name} fullWidth>
                        <InputLabel>Nome</InputLabel>
                        <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        />
                        <FormHelperText sx={{ marginBottom: 3 }}>
                          { errors.name && touched.name ? errors.name : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.email && touched.email} fullWidth>
                        <InputLabel>E-mail</InputLabel>
                        <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        <FormHelperText sx={{ marginBottom: 3 }}>
                          { errors.email && touched.email ? errors.email : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.password && touched.password} fullWidth>
                        <InputLabel>Senha</InputLabel>
                        <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        <FormHelperText sx={{ marginBottom: 3 }}>
                          { errors.password && touched.password ? errors.password : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.confirmPassword && touched.confirmPassword} fullWidth>
                        <InputLabel>Confirmação de senha</InputLabel>
                        <Input
                        name="confirmPassword"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        />
                        <FormHelperText sx={{ marginBottom: 3 }}>
                          { errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                        </FormHelperText>
                      </FormControl>

                      {
                        isSubmitting 
                        ? (
                          <CircularProgress sx={{ display: 'block', margin: '8px auto' }} />
                        ) : (
                          <Button 
                            type="submit" 
                            variant="contained"
                            color="primary" 
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                          >
                            CADASTRAR
                          </Button>
                        )
                      }

                      <Link href="#" passHref>
                        <Typography
                          cursor="pointer"
                          component="a"
                          variant="body2"
                          color='black'
                          sx={{ textDecoration: 'none' }}
                        >
                          Já tem uma conta? Entre aqui
                        </Typography>
                      </Link>

                    </Box>
                  </Container>
                </form>
              )
            }
          }
        </Formik>
      </TemplateDefault>
  )
}

export default Signup
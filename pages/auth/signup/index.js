import Link from 'next/link'
import { Formik } from 'formik'

import {
  Box,
  Button,
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

const Signup = () => {

  return (
      <TemplateDefault>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('ok enviou', values)
        }}
        >
          {
            ({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
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

                      <Button 
                        type="submit" 
                        variant="contained"
                        color="primary" 
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                      >
                        CADASTRAR
                      </Button>

                      <Link href="#" passHref>
                        <Typography
                          cursor="pointer"
                          component="a"
                          variant="body2"
                          color='black'
                          sx={{ textDecoration: 'none' }}
                        >
                          Já tem uma conta? Entrei aqui
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
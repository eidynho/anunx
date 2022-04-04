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

const Signin = () => {
  const { setToasty } = useToasty()
  const router = useRouter()

  const handleFormSubmit = async values => {
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
                    <Typography component="h1" variant="h2" align="center" gutterBottom>
                      Entre na sua conta
                    </Typography>
                  </Container>

                  <Container maxWidth="md">
                    <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>

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
                            ENTRAR
                          </Button>
                        )
                      }

                      <Link href="/auth/signup" passHref>
                        <Typography
                          cursor="pointer"
                          component="a"
                          variant="body2"
                          color='black'
                          sx={{ textDecoration: 'none' }}
                        >
                          Clique aqui para se cadastrar
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

export default Signin
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import { signIn, useSession } from 'next-auth/react'

import {
  Alert,
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

const Signin = ({ APP_URL }) => {
  const { data: session} = useSession()
  console.log(session)
  const router = useRouter()
  
  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`
    })
  }
  
  const handleGoogleLogin = () => signIn('google', {
    callbackUrl: `${APP_URL}/user/dashboard`
  })
  

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

                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={
                            <Image 
                            src="/images/logo_google.svg"
                            alt="Login com Google"
                            width={20}
                            height={20} />
                          }
                          onClick={handleGoogleLogin}>Entrar com Google</Button>
                      </Box>

                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#e8e8e8',
                        width: '100%',
                        height: '1px',
                        marginTop: 5,
                        marginBottom: 4,
                        
                        '& span': {
                          backgroundColor: '#FFF',
                           padding: '0 30px' 
                        }
                      }}>
                        <span>ou</span>
                      </Box>


                      {
                        router.query.i === '1'
                          ? (
                            <Alert severity="error" sx={{ margin: '20px 0' }}>
                              Usuário ou senha inválidos
                            </Alert>
                          )
                          : null
                      }

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

export async function getServerSideProps() {
  return {
    props: {
      APP_URL: process.env.APP_URL
    }
  }
}

export default Signin
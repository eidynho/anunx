
import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
  Typography,
  OutlinedInput,
} from '@mui/material'
import { DeleteForever } from '@mui/icons-material'
import { Box } from '@mui/system' //é uma div
import { useDropzone } from 'react-dropzone'

import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'



const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(80, 'Título muito grande')
    .required('Campo obrigatório'),
})

const Publish = () => {

  const [files, setFiles] = useState ([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFile => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName)
    setFiles(newFileState)
  }


  return (
    <TemplateDefault>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok enviou', values)
        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => {

            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="sm" sx={{ paddingBottom: 3}}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar anúncio
                  </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado melhor
                  </Typography>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                    backgroundColor: theme.palette.background.white,
                    padding: 3,
                  }}>
                  <Typography component="h6" variant="h6" color="textPrimary">
                    Título do anúncio
                  </Typography>
                  <TextField
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  label="ex.: Bicicleta aro 18 com garantia" 
                  size="small"
                  fullWidth="true"
                  sx={{marginBottom: 3}}
                  error={errors.title}
                  helperText={errors.title}
                  />

                  <Typography component="h6" variant="h6" color="textPrimary">
                    Categoria
                  </Typography>
                  <Select 
                    native
                    value=""
                    fullWidth
                    //onChange={handleChangeCategory}
                    inputProps={{
                      name: 'age',
                    }}
                  >
                    <option value="">Selecione</option>
                    <option value={1}>Bebê e crianças</option>
                    <option value={2}>Agricultura</option>
                    <option value={3}>Moda</option>
                    <option value={4}>Carros, motos e barcos</option>
                    <option value={5}>Serviços</option>
                    <option value={6}>Lazer</option>
                    <option value={7}>Animais</option>
                    <option value={8}>Móveis, casa e jardim</option>
                    <option value={9}>Imóveis</option>
                    <option value={10}>Equipamentos e ferramentas</option>
                    <option value={11}>Celulares e tablets</option>
                    <option value={12}>Esportes</option>
                    <option value={13}>Tecnologia</option>
                    <option value={14}>Emprego</option>
                    <option value={15}>Outros</option>


                  </Select>
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                      A primeira imagem é a foto principal do seu anúncio
                    </Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: '15px'}}>
                      <Box
                        {...getRootProps()}
                        sx={{
                          cursor: 'pointer',
                          width: 200,
                          height: 150,
                          padding: '10px',
                          margin: '0 15px 15px 0',
                          backgroundColor: theme.palette.background.default,
                          border: '2px dashed black',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <input {...getInputProps()} />
                        <Typography variant="body2" color="textPrimary">
                          Clique para adicionar ou arraste a imagem aqui.
                        </Typography>
                      </Box>

                      {
                        files.map((file, index) => (
                          <Box
                            key={file.name}
                            style={{ backgroundImage: `url(${file.preview})` }}
                            sx={{
                              position: 'relative',
                              width: 200,
                              height: 150,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center center',
                              margin: '0 15px 15px 0',

                              '&:hover .mask': {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              },
                            }}>
                            {
                              index === 0 ?
                                <Box sx={{
                                  backgroundColor: 'green',
                                  padding: '4px 16px',
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                }}>
                                  <Typography variant="body" color="secondary">
                                    Principal
                                  </Typography>
                                </Box>
                                : null
                            }

                            <Box
                              className={'mask'}
                              sx={{
                                display: 'none',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                height: '100%',
                                textAlign: 'center',

                            }}>
                              <IconButton color="secondary" fontSize="large" onClick={() => handleRemoveFile(file.name)}>
                                <DeleteForever />
                              </IconButton>
                            </Box>
                          </Box>
                        ))
                      }

                    </Box>
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                      Escreva os detalhes do que está vendendo
                    </Typography>
                    <TextField
                      multiline
                      rows={6}
                      variant="outlined"
                      fullWidth="true"
                    />
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Preço
                    </Typography>
                    <br />
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Valor</InputLabel>
                      <OutlinedInput 
                        onChange={() => {}}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        labelWidth={40}
                      />
                    </FormControl>
                  </Box>
                </Container>


                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                      Dados de contato
                    </Typography>
                    <TextField
                      label="Nome"
                      variant="outlined"
                      size="small"
                      fullWidth="true"
                    />
                    <br /><br />
                    <TextField
                      label="E-mail"
                      variant="outlined"
                      size="small"
                      fullWidth="true"
                    />
                    <br /><br />
                    <TextField
                      label="Telefone"
                      variant="outlined"
                      size="small"
                      fullWidth="true"
                    />
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box textAlign="right">
                    <Button type="submit" variant="contained" color="primary">
                      Publicar anúncio
                    </Button>
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

export default Publish
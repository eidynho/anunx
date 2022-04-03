
import { Formik } from 'formik'

import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  FormHelperText,
  Input,
} from '@mui/material'
import { Box } from '@mui/system' //é uma div


import TemplateDefault from '../../../src/templates/Default'
import theme from '../../../src/theme'
import { initialValues, validationSchema } from './formValues'
import  FileUpload  from '../../../src/components/FileUpload'

const Publish = () => {

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

                  <FormControl error={errors.title && touched.title} fullWidth>
                    <InputLabel>Título do Anúncio</InputLabel>
                    <Input
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    />
                    <FormHelperText sx={{ marginBottom: 3 }}>
                      { errors.title && touched.title ? errors.title : null}
                    </FormHelperText>
                  </FormControl>


                  <FormControl error={errors.category && touched.category} fullWidth>
                    <InputLabel>Categoria</InputLabel>
                    <Select 
                      name="category"
                      values={values.category}
                      onChange={handleChange}
                      fullWidth
                      variant="standard"
                    >
                      <MenuItem value="Bebê e criança">Bebê e criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, motos e barcos">Carros, motos e barcos</MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Móveis, casa e jardim">Móveis, casa e jardim</MenuItem>
                      <MenuItem value="Imóveis">Imóveis</MenuItem>
                      <MenuItem value="Equipamentos e ferramentas">Equipamentos e ferramentas</MenuItem>
                      <MenuItem value="Celulares e tablets">Celulares e tablets</MenuItem>
                      <MenuItem value="Esportes">Esportes</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    <FormHelperText>
                      { errors.category && touched.category ? errors.category : null}
                    </FormHelperText>
                  </FormControl>

                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <FileUpload 
                      files={values.files}
                      errors={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                    />
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                    }}>
                    <FormControl error={errors.description && touched.description} fullWidth>
                      <InputLabel>Escreva os detalhes do que está vendendo</InputLabel>
                      <Input
                        name="description"
                        values={values.description}
                        onChange={handleChange}
                        multiline
                        rows={6}
                        variant="filled"
                      />
                      <FormHelperText>
                        { errors.description && touched.description ? errors.description : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" sx={{ paddingBottom: 3}}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.white,
                      padding: 3,
                      paddingTop: 5,
                    }}>
                    <FormControl error={errors.price && touched.price} fullWidth>
                      <InputLabel>Preço de venda</InputLabel>
                      <Input
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                      />
                      <FormHelperText sx={{ marginBottom: 3 }}>
                        { errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
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

                    <FormControl error={errors.name && touched.name} fullWidth>
                      <InputLabel>Nome:</InputLabel>
                      <Input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      />
                      <FormHelperText sx={{ marginBottom: 3 }}>
                        { errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.email && touched.email} fullWidth>
                      <InputLabel>E-mail:</InputLabel>
                      <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      />
                      <FormHelperText sx={{ marginBottom: 3 }}>
                        { errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl error={errors.phone && touched.phone} fullWidth>
                      <InputLabel>Telefone:</InputLabel>
                      <Input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      />
                      <FormHelperText sx={{ marginBottom: 3 }}>
                        { errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
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
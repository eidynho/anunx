
import { Button, Container, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system' //é uma div

import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'

const Publish = () => {

  return (
    <TemplateDefault>
      <Container maxWidth="sm" sx={{ padding: (8, 0, 6) }}>
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
         label="ex.: Bicicleta aro 18 com garantia" 
         size="small"
         fullWidth="true"
         sx={{marginBottom: 3}}
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
          <Button variant="contained" color="primary">
            Publicar anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish
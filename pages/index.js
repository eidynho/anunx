import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const Home = () => {

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 1,
            marginTop: '20px',
          }}
        >
          <InputBase
            placeholder="Ex.: iPhone 12 com garantia"
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>



      <Container maxWidth="lg" sx={{ paddingTop: 6, paddingBottom: 4 }}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
            Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
            />
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/search'
import TemplateDefault from '../src/templates/Default'

const Home = () => {

  return (
    <TemplateDefault>
      <Container maxWidth="md" sx={{
        padding: (8, 0, 6),
      }}>
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



      <Container maxWidth="md" sx={{ padding: (8, 0, 6) }}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
            Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                image={'https://source.unsplash.com/random'}
                title="Título da imagem"
                sx={{
                  paddingTop: '56%'
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                image={'https://source.unsplash.com/random'}
                title="Título da imagem"
                sx={{
                  paddingTop: '56%'
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                image={'https://source.unsplash.com/random'}
                title="Título da imagem"
                sx={{
                  paddingTop: '56%'
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
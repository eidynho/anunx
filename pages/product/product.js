import Carousel from 'react-material-ui-carousel'

import {
  Avatar,
  Card,
  CardMedia,
  CardHeader,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'


import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
const Product = () => {

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3, 
              marginBottom: 3
            }}>

              <Carousel
                autoPlay={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                  style: {
                    color: 'white'
                  }
                }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    image='https://source.unsplash.com/random?a=1'
                    title='Título da página'
                    sx={{
                      paddingTop: '56%'
                    }}
                  />
                </Card>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    image='https://source.unsplash.com/random?a=2'
                    title='Título da página'
                    sx={{
                      paddingTop: '56%'
                    }}
                  />
                </Card>
              </Carousel>
            </Box>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginBottom: 3,
              textAlign: 'left',
            }}>
              <Typography component="span" variant="caption">
                Publicado 02 de abril de 2022
              </Typography>
              <Typography component="h4" variant="h4">
                Jaguar XE 2.0 D R-Sport Aut.
              </Typography>
              <Typography component="h4" variant="h4" sx={{ 
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}>
                R$ 400.000,00
              </Typography>
              <Chip label="Categoria" />
            </Box>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginBottom: 3,
              textAlign: 'left',
            }}>
              <Typography component="h6" variant="h6">Descrição</Typography>
              <Typography component="p" variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>

            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} sx={{ padding: 1 }}>
              <CardHeader
                avatar={
                  <Avatar></Avatar>
                }
                title='Vinicius Eidy'
                subheader='vinicius@email.com'
              />
              <CardMedia 
                image='https://source.unsplash.com/random'
                title='Vinicius Eidy'
              />
            </Card>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginTop: 3,
              textAlign: 'left',
            }}>
              <Typography component="h6" variant="h6">Localização</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Product
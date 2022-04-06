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


import TemplateDefault from '../../../src/templates/Default'
import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import theme from '../../../src/theme'
import { formatCurrency } from '../../../src/utils/currency'

const Product = ({ product }) => {

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
                navButtonsAlwaysInvisible={true}
                sx={{
                  margin: 'auto',
                }}
              >
                {
                  product.files.map(file => (
                    <Card key={file.name} sx={{ height: '100%' }}>
                      <CardMedia
                        image={`/uploads/${file.name}`}
                        title={product.title}
                        sx={{
                          paddingTop: '100%'
                        }}
                      />
                    </Card>
                  ))
                }
                </Carousel>
            </Box>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginBottom: 3,
              textAlign: 'left',
            }}>
              <Typography component="span" variant="caption">
                Publicado 02 de abril de 2022 -- TO DO!
              </Typography> 
              <Typography component="h4" variant="h4" sx={{ wordWrap: 'break-word' }}>
                {product.title}
              </Typography>
              <Typography component="h4" variant="h4" sx={{ 
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}>
                {formatCurrency(product.price)}
              </Typography>
              <Chip label={product.category} />
            </Box>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginBottom: 3,
              textAlign: 'left',
            }}>
              <Typography component="h6" variant="h6">Descrição</Typography>
              <Typography component="p" variant="body2" sx={{ wordWrap: 'break-word' }}>{product.description}</Typography>

            </Box>
          </Grid>

          

          <Grid item xs={4}>
            <Card elevation={0} sx={{ padding: 1 }}>
              <CardHeader
                avatar={
                  <Avatar src={ product.user.image }>
                    { product.user.image || product.user.name[0] }
                  </Avatar>
                }
                title={product.user.name}
                subheader={product.user.email}
              />
              <CardMedia 
                image={ product.user.image }
                title={ product.user.name }
              />
            </Card>

            <Box sx={{ 
              backgroundColor: theme.palette.background.white, 
              padding: 3,
              marginTop: 3,
              textAlign: 'left',
            }}>
              <Typography component="h6" variant="h6">Localização -- TO DO</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query //nome da pagina: [id]
  
  await dbConnect()

  const product = await ProductsModel.findOne({ _id: id })

  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }

}

export default Product
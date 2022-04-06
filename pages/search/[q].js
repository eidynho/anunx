import Link from 'next/link'
import slugify from 'slugify'
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Link as LinkMUI,
  Paper,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/search'

import ProductsModel from '../../src/models/products'
import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'

const List = ({ products }) => {

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 1,
            paddingLeft: 3,
            marginTop: '20px',
            marginBottom: 3,
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


        <Box sx={{
          backgroundColor: theme.palette.background.white, 
          padding: 3, 
          marginBottom: 3
        }}
        >
          <Typography component="h6" variant="h6" sx={{ marginBottom: 1 }}>
            Anúncios
          </Typography>
          <Typography component="subtitle2" variant="subtitle2">
            ENCONTRADOS {products.length} ANÚNCIOS PARA O TERMO
          </Typography>

          <Grid container spacing={4} sx={{ marginTop: 0.2 }}>
            {
              products.map( product => {
                const category = slugify(product.category).toLowerCase()
                const title = slugify(product.title).toLowerCase()


                return (
                  <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Link href={`/${category}/${title}/${product._id}`} passHref>
                      <LinkMUI sx={{
                        textDecoration: 'none'
                      }}>
                        <Card 
                          image={`/uploads/${product.files[0].name}`}
                          title={product.title}
                          subtitle={formatCurrency(product.price)}
                        />
                      </LinkMUI>
                    </Link>
                  </Grid>
                )
              })
            }
          </Grid>

        </Box>

      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await ProductsModel.find({
    $or: [

      { 
        title: { 
          $regex: q,
          $options: 'i'
        }
      },

      {
        description: { 
          $regex: q,
          $options: 'i'
        },
      },

    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }

  }
}

export default List
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import slugify from 'slugify'

import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Link as LinkMUI,
  Paper,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'



const Home = ({ products }) => {
  const router = useRouter()
  const [search, setSearch] = useState()

  const handleSubmitSearch = () => {
    router.push({
      pathname: `/search/${search}`
    })
  }

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
            paddingLeft: 3,
            marginTop: '20px',
          }}
        >
          <InputBase
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder="Ex.: iPhone 12 com garantia"
            fullWidth
          />
          <IconButton onClick={handleSubmitSearch}>
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
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const products = await ProductsModel.aggregate([{
    $sample: { size: 6 }
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    },
  }
}

export default Home
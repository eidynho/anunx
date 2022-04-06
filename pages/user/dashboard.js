import { useState } from 'react'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import axios from 'axios'
import slugify from 'slugify'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link as LinkMUI,
  Typography,
} from '@mui/material'

import { formatCurrency } from '../../src/utils/currency'
import Card from '../../src/components/Card'
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import TemplateDefault from '../../src/templates/Default'
import useToasty from '../../src/contexts/Toasty'

const Home = ({ products }) => {
  const { setToasty } = useToasty()
  const [productId, setProductId] = useState()
  const [removedProducts, setRemovedProducts] = useState([])
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const handleCloseModal = () => setOpenConfirmModal(false)

  const handleClickRemove = (productId) => {
    setProductId(productId)
    setOpenConfirmModal(true)
  }
  
  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }

  const handleSuccess = () => {
    handleCloseModal(false)
    setRemovedProducts([ ...removedProducts, productId ])
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com successo'
    })
  }

  const handleError = () => {
    handleCloseModal(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!'
    })
  }
  


  return (
    <TemplateDefault>

      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>
          Deseja realmente remover este anúncio?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Ao confirmar a operação, não poderá desfazê-la.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleConfirmRemove} autoFocus>Remover</Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="sm" align="center">
        <Typography component="h1" variant="h2" align="center">
          Meus anúncios
        </Typography>
        <Link href="/user/publish" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{ 
              marginTop: '20px',
              marginBottom: '40px',
              display: 'inline-block'
            }}
          >
            Publicar novo anúncio
          </Button>
        </Link>
      </Container>

      {
        products.length === 0
          ? <Typography component="div" variant="h5" align="center" color="textPrimary" gutterBottom sx={{ marginTop: 8 }}>
              Nenhum anúncio publicado
            </Typography>
          : null
      }
      
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {
            products.map(product => {
              const category = slugify(product.category).toLowerCase()
              const title = slugify(product.title).toLowerCase()

              if (removedProducts.includes(product._id)) return null

              return (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Link href={`/${category}/${title}/${product._id}`} passHref>
                  <LinkMUI sx={{
                    textDecoration: 'none'
                  }}>
                    <Card
                      image={`/uploads/${product.files[0].name}`}
                      title={product.title}
                      subtitle={formatCurrency(product.price)}
                      actions={
                        <>
                          <Button size="small" color="primary">
                            Editar
                          </Button>
                          <Button size="small" color="primary" onClick={() => handleClickRemove(product._id)}>
                            Remover
                          </Button>
                        </>
                      }
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

Home.requireAuth = true

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.accessToken })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Home
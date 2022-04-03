import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/search'


import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
import Card from '../../src/components/Card'
import { Box } from '@mui/system'

const List = () => {

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
            ENCONTRADOS 200 ANÙNCIOS
          </Typography>

          <Grid container spacing={4} sx={{ marginTop: 0.2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card 
                image="https://source.unsplash.com/random"
                title="Produto X"
                subtitle="R$ 50.00"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card 
                image="https://source.unsplash.com/random"
                title="Produto X"
                subtitle="R$ 20.00"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card 
                image="https://source.unsplash.com/random"
                title="Produto X"
                subtitle="R$ 20.00"
              />
            </Grid>
          </Grid>

        </Box>

      </Container>
    </TemplateDefault>
  )
}

export default List
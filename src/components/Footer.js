import Link from 'next/link'

import { Container, Divider, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { createTheme } from '@mui/material/styles'


const Footer = () => {

  return (
    <Container maxWidth="lg" component="footer" sx={{paddingBottom: 3}}>
      <Divider  sx={{ marginTop: 5 }} />
      <Grid container spacing={3} sx={{ marginTop: 5, marginBottom: 6 }}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1" sx={{cursor: 'pointer'}}>
                <a>Ajuda e contato</a>
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1" sx={{cursor: 'pointer'}}>
                <a>Dicas de segurança</a>
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1" sx={{cursor: 'pointer'}}>
                <a>Anunciar e vender</a>
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="#" passHref>
              <Typography color="textSecondary" variant="subtitle1" sx={{cursor: 'pointer'}}>
                <a>Plano profissional</a>
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
import { useState } from 'react'
import { AccountCircle, MenuIcon } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'
import Link from 'next/link'

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="inherit" variant="outlined" >
                Anunciar e vender
              </Button>
            </Link>
            <IconButton
              color="secondary"
              onClick={e => setAnchorUserMenu(e.currentTarget)}
            >
              {
                true === false
                  ? <Avatar src='' />
                  : <AccountCircle />
              }
              <Typography 
                variant="subtitle2" 
                color="secondary"
                sx={{ marginLeft: '6px' }}
              >
                Vinicius Eidy
              </Typography>
            </IconButton>

              <Menu
                anchorEl={anchorUserMenu}
                open={openUserMenu}
                onClose={() => setAnchorUserMenu(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
              >
                <Link href="/user/dashboard" passHref>
                  <MenuItem>Meus anúncios</MenuItem>
                </Link>
                <Link href="/user/publish" passHref>
                  <MenuItem>Publicar novo anúncio</MenuItem>
                </Link>
                <Divider />
                <MenuItem>Sair</MenuItem>
                
              </Menu>

          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  )
}

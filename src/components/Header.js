import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

import { AccountCircle } from '@mui/icons-material'
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
  
  const { data: session } = useSession()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant="outlined" sx={{ marginRight: '10px' }}>
                Anunciar e vender
              </Button>
            </Link>
            {
              session
                ? (
                    <IconButton
                      color="secondary"
                      onClick={e => setAnchorUserMenu(e.currentTarget)}
                    >
                      {
                        session.user.image
                          ? <Avatar src={session.user.image} />
                          : <AccountCircle />
                      }
                      <Typography 
                        variant="subtitle2" 
                        color="secondary"
                        sx={{ marginLeft: '10px' }}
                      >
                        {session.user.name}
                      </Typography>
                    </IconButton>
                ) : null
            }


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
                <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sair</MenuItem>
                
              </Menu>

          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  )
}

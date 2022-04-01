import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },

    background: {
      default: 'rgb(242, 244, 245)',
      white: '#FFFFFF',
    }
  }
})

export default theme
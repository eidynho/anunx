import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@mui/system'

const Default = ({ children }) => {

  return (
    <>
      <Header />
      <Box
       sx={{
         paddingTop: 6,
         paddingBottom: 6,
       }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Default
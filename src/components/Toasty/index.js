import {
  Alert,
  Snackbar,
} from '@mui/material'

const Toasty = ({ open, text, severity, onClose=null }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    if (onClose) onClose()
    
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Toasty
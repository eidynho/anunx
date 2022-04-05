import { useDropzone } from 'react-dropzone'

import {
  IconButton,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { DeleteForever } from '@mui/icons-material'

import theme from '../theme'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFile => {
      const newFiles = acceptedFile.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
      
      setFieldValue('files', [
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = filePath => {
    const newFileState = files.filter(file => file.path !== filePath)
    setFieldValue('files', newFileState)
  }

  return (
    <>
      <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
        Imagens
      </Typography>
      <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
        A primeira imagem é a foto principal do seu anúncio
      </Typography>
      {
        errors && touched
          ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
          : null
      }
      <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: '15px'}}>
        <Box
          {...getRootProps()}
          sx={{
            cursor: 'pointer',
            width: 200,
            height: 150,
            padding: '10px',
            margin: '0 15px 15px 0',
            backgroundColor: theme.palette.background.default,
            border: '2px dashed black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <input names="files" {...getInputProps()} />
          <Typography variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
            Clique para adicionar ou arraste a imagem aqui.
          </Typography>
        </Box>

        {
          files.map((file, index) => (
            <Box
              key={file.name}
              style={{ backgroundImage: `url(${file.preview})` }}
              sx={{
                position: 'relative',
                width: 200,
                height: 150,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                margin: '0 15px 15px 0',

                '&:hover .mask': {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}>
              {
                index === 0 ?
                  <Box sx={{
                    backgroundColor: 'green',
                    padding: '4px 16px',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                  }}>
                    <Typography variant="body" color="secondary">
                      Principal
                    </Typography>
                  </Box>
                  : null
              }

              <Box
                className={'mask'}
                sx={{
                  display: 'none',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  height: '100%',
                  textAlign: 'center',

              }}>
                <IconButton color="secondary" fontSize="large" onClick={() => handleRemoveFile(file.path)}>
                  <DeleteForever />
                </IconButton>
              </Box>
            </Box>
          ))
        }

      </Box>
    </>
  )
}

export default FileUpload
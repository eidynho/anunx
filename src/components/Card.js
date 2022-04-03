import {
  Card as CardMUI,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'

const Card = ({ image, title, subtitle, actions}) => {

  return (
    <CardMUI>
      <CardMedia 
        image={image}
        title={title}
        sx={{
          paddingTop: '56%'
        }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
        {
          actions ?
          <CardActions>
            {actions}
          </CardActions>
          : null
        }
    </CardMUI>
  )
}

export default Card
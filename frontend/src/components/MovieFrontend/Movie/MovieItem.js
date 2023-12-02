import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const MovieItem = ({title,description, releaseDate, id,postUrl}) => {
  return (
    <Card sx={{ maxWidth: 400, height:320, borderRadius:5, ":hover":{boxShadow : "10px 10px 20px #ccc"}, margin:5}}>
      <img height={"50%"} width={"250"} src={postUrl} alt={title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" marginTop={"-10px"}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { new Date(releaseDate).toDateString() }
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{margin:"auto"}} size="small">Book</Button>
      </CardActions>
    </Card>
  )
}

export default MovieItem
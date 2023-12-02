import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  // above prop --> id=current blog id and isUser= id of user of current blog
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/blogDetail/${id}`)
    // here this above id (it is taken from blogs comp) pass to the BlogAppMainFile also this id forword to BlogDetail comp but in BlogDetail use useParams() for access that id.
  }

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:4000/api/blog/deleteBlog/${id}`)
      .catch((e) => console.log(e))
    const data = await res.data;
    return data;
  }
  const handleDelete = (e) => {
    e.preventDefault()
    deleteRequest().then(() => navigate('/')).then(() => navigate('/blogs'))
  }

  return (
    <div>
      <Card sx={{
        maxWidth: 345,
        marginLeft: 55,
        width: '40%',
        padding: 2,
        mt: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc"
        }
      }}>
        {
          isUser && (
            <Box display='flex'>
              <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}><EditIcon color='warning' /></IconButton>
              <IconButton onClick={handleDelete}><DeleteForeverIcon color='error' /></IconButton>
            </Box>
          )
        }
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }

          title={title}
        // subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt='getbyuser'
        />

        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {': '} {description}
          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}

export default Blog
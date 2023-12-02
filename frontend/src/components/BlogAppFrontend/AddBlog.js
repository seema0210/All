import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const lableStyle = { mb: 1, mt: 2, fontSize: '20px', fontWeight: 'bold' }
const AddBlog = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    image: ''
  })
  const handleChange = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }

  const sendRequest = async () => {
    const res = await axios.post(`http://localhost:4000/api/blog/addBlog`, {
      title: inputs.title,
      description: inputs.description,
      image: inputs.image,
      user: localStorage.getItem('userId')
    })
      .catch((e) => console.log(e))
    const data = await res.data;
    return data;
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('fronend', inputs)
    sendRequest().then((data) => setInputs(data)).then(() => navigate('/blogs'))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor='darkBlue'
          borderRadius={7}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={23}
          marginTop={3}
          display={'flex'}
          flexDirection={'column'}
          width={'70%'}
        >
          <Typography
            fontWeight={'bold'}
            padding={3}
            color={'gray'}
            variant='h3'
            textAlign={'center'}
          >Post Your Blog</Typography>
          <InputLabel sx={lableStyle}>Title</InputLabel>
          <TextField
            margin='auto'
            variant='outlined'
            name='title'
            value={inputs.title}
            onChange={handleChange}
          />
          <InputLabel sx={lableStyle}>Description</InputLabel>
          <TextField
            margin='auto'
            variant='outlined'
            name='description'
            value={inputs.description}
            onChange={handleChange}
          />
          <InputLabel sx={lableStyle}>ImageURL</InputLabel>
          <TextField
            margin='auto'
            variant='outlined'
            name='image'
            value={inputs.image}
            onChange={handleChange}
          />
          <Button type='submit'
            sx={{ mt: 2, borderRadius: 4 }}
            variant='contained'
            color='warning'
          >Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const lableStyle = { mb: 1, mt: 2, fontSize: '20px', fontWeight: 'bold' }

const BlogDetail = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({})
  const handleChange = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }

  // this id taken from BlogAppMainFile
  const params = useParams();
  const newId = params.id
  console.log('id for update blog', newId)

  const [blog, setBlog] = useState()

  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:4000/api/blog/getBlogById/${newId}`)
      .catch((e) => console.log(e))
    const data = await res.data;
    console.log('fetch blog', data)
    return data;
  }
  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data)
      setInputs({ title: data.title, description: data.description })
      // get the blog by id from backend for its updation. above line get all blog information from backend and pass to 'inputs' and this 'inputes' show data in table also we want to update that data using put api.
    })
  }, [newId])
  // when id update then eecute this

  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:4000/api/blog/updateBlog/${newId}`, {
      title: inputs.title,
      description: inputs.description
    }).catch((e) => console.log(e))
    const data = await res.data;
    return data
    // here user can update 'inputes' value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest().then((data) => console.log('updated data', data)).then(() => navigate('/myBlogs'))
  }
  return (
    <div>
      {
        inputs &&
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor='darkBlue'
            borderRadius={7}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin='auto'
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
            >Update Your Blog</Typography>
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
            {/* <InputLabel sx={lableStyle}>ImageURL</InputLabel>
          <TextField
           margin='auto' 
           variant='outlined'
           name = 'image'
          value={inputs.image}
          onChange={handleChange}
           /> */}
            <Button type='submit'
              sx={{ mt: 2, borderRadius: 4 }}
              variant='contained'
              color='warning'
            >Submit</Button>
          </Box>
        </form>
      }
    </div>
  )
}

export default BlogDetail
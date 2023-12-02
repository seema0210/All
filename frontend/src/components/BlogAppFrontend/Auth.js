// when click on login,signup and logout then open '/auth' path bcoz this path use all these buttons
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { authActions } from './store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [isSignup, setIsSignup] = useState(false)

  const handleChange = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }
  const sendRequest = async (type = 'login') => {
    const res = await axios.post(`http://localhost:4000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch((e) => console.log('error at signup or login', e))

    const data = await res.data;
    return data;

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('post req')
    if (isSignup) {
      // when isSignup is true then signup process o.w login (we have bydefault set login)
      sendRequest('signup')
        .then((data) => localStorage.setItem("userId", data.user._id))
        // localStorage is globaly, it has fun setItem with 2 arguments (key and value). key="userId", value=data.user._id
        .then(() => dispatch(authActions.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data))
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data))

    }
    // here call login action bcoz when login true then 'All Blogs' and 'My Blogs' open.
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* BOX is similar to div */}
        <Box
          maxWidth={400}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          boxShadow={'10px 10px 20px #ccc'}
          padding={2}
          margin={'auto'}
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant='h3' padding={3} textAlign={'center'}>
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          {
            isSignup && <TextField
              placeholder='name'
              margin='normal'
              name='name'
              value={inputs.name}
              onChange={handleChange}
            />
          }
          <TextField
            type='email'
            placeholder='email'
            margin='normal'
            name='email'
            value={inputs.email}
            onChange={handleChange}
          />
          <TextField
            type='password'
            placeholder='password'
            margin='normal'
            name='password'
            value={inputs.password}
            onChange={handleChange}
          />
          <Button
            type='submit'
            variant='contained'
            color='warning'
            sx={{ borderRadius: 3, marginTop: 3 }}
          >Submit
          </Button>
          <Button
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => setIsSignup(!isSignup)}>
            Change To {!isSignup ? 'Signup' : 'Login'}
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
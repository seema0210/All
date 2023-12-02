import { Dialog, FormLabel, TextField, Typography, Box, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthForm = ({ onSubmit, isAdmin }) => {
    // here is isAdmin taken from Admin comp
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [input, setInput] = useState({
        fname: "", email: "", password: ""
    })

    const changeInput = (e) => {
        setInput((pre) => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // we need to know it is signup or login thats why use below signup key.
        // jevha Admin false asel tevha Auth true anar, below Admin jevha true asel tevha signup la false value assign honar (karan Admin true asel tevha login process chalu asnar) aani false asel tevha signup precess rahnar (i.e signup chi value true yeyil).
        // Auth madhe donohi aahe signup and ligin tyamule Admin la false thevave lagle aahe aani Auth madhil login karaycheki signup te isSignup var depend karnar, isSignup chi value "LOGIN/SIGNUP" buttonvar depend karnar
        onSubmit({input, signup: isAdmin?false:isSignup})
    }
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)
    console.log("admin login", isAdminLoggedIn)
    console.log("user login", isUserLoggedIn)
    return (
        // if click on auth then display this dialog box
        <Dialog open={true}>
            {/* we need to use 'open' property for open the given dialog */}
            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to='/'>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Typography variant='h4' textAlign={"center"} >{isSignup ? "Signup" : "Login"}</Typography>
            <form onSubmit={handleSubmit}>
                <Box display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    width={400} margin={"auto"}
                    alignContent={"center"}
                    padding={3}
                >
                    {
                        // when Admin false then open 'name' property
                        !isAdmin && isSignup && (
                            <>
                                <FormLabel sx={{ mt: 1 }}>Name</FormLabel>
                                <TextField variant='standard'
                                    margin='normal' type='text'
                                    name='fname'
                                    onChange={changeInput}
                                    value={input.fname} />
                            </>
                        )
                    }

                    <FormLabel sx={{ mt: 1 }}>Email</FormLabel>
                    <TextField variant='standard'
                        margin='normal'
                        type='text'
                        name='email'
                        onChange={changeInput}
                        value={input.email} />
                    <FormLabel sx={{ mt: 1 }}>Password</FormLabel>
                    <TextField variant='standard'
                        margin='normal'
                        type={showPassword ? "text" : "password"}
                        name='password'
                        onChange={changeInput}
                        value={input.password} />
                    <Button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"} Password</Button>
                    <Button
                        sx={{ mt: 2, borderRadius: 10, bgcolor: '#2b2d42' }}
                        type='submit'
                        variant='conatined'
                    >{isSignup ? "Signup" : "Login"}</Button>
                    {/* when Admin false then show this button */}
                    {
                        !isAdmin && <Button sx={{ mt: 2, borderRadius: 10 }} onClick={() => setIsSignup(!isSignup)}>
                            Switch {isSignup ? "login" : "signup"}
                        </Button>
                    }
                </Box>
            </form>
        </Dialog>
    )
}

export default AuthForm
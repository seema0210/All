import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store'

const Header = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const isLoggedIn = useSelector((state) => state.isLoggedIn)

    return (
        <AppBar sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,58,121,1) 35%, rgba(0,212,255,1) 100%);" }} position='sticky'>
            {/* take bg color fron css gradient (google) */}
            {/* position='sticky' use because below o/p display in background */}
            <Toolbar>
                <Typography variant='h4'>BlogsApp</Typography>
                {
                    isLoggedIn && <Box display='flex' marginLeft={'auto'} marginRight={'auto'}>
                        <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                            <Tab label="All Blogs" LinkComponent={Link} to="/blogs" />
                            <Tab label="My Blogs" LinkComponent={Link} to="/myBlogs" />
                            <Tab label="Add Blog" LinkComponent={Link} to="/addBlog" />
                        </Tabs>
                    </Box>
                    // isLoggedIn value is false, when login true thats time show these links
                }
                <Box display="flex" marginLeft="auto">
                    {
                        !isLoggedIn && <>
                            <Button LinkComponent={Link} to="/auth"
                                variant='contained' color='warning' sx={{ margin: 1, borderRadius: 10 }}>
                                Login
                            </Button>
                            <Button LinkComponent={Link} to="/auth"
                                variant='contained' color='warning' sx={{ margin: 1, borderRadius: 15 }}>
                                Signup
                            </Button>
                        </>
                        // when login false then show login and signup
                    }

                    {
                        isLoggedIn && <Button LinkComponent={Link} to="/auth"
                            variant='contained'
                            color='warning'
                            sx={{ margin: 1, borderRadius: 15 }}
                            onClick={() => dispatch(authActions.loguot())}
                        //  navbar madhil logout button la directly logout action connect keli but signup and login la form connect karun tya form madhil request la action connect keli.
                        >
                            Logout
                        </Button>
                        //    when login true then show logout button
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
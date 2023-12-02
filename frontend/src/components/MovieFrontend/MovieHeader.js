import React, {useState,useEffect} from 'react'
import { Link    } from 'react-router-dom';
import { AppBar, Box, Toolbar,Autocomplete,TextField,Tabs,Tab } from '@mui/material'
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import { getAllMovies } from './API/api-helpers';
import { useSelector } from 'react-redux';
const MovieHeader = () => {
    const [value, setValue] = useState(0)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => {
            setMovies(data)
        }).catch((e) => {
            console.log("data not found"+e)
        })
    }, [])

    // useSelector use for get the redux functionality from store
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)
    console.log("admin login", isAdminLoggedIn)
    console.log("user login", isUserLoggedIn)
console.log('header')
    
    return (
        <AppBar sx={{bgcolor:"#2d2b42"}} position='sticky'>
            <Toolbar>
                <Box width={"20%"}><MovieCreationRoundedIcon /></Box>
                <Box width={"40%"} margin={"auto"}>
                    {/* below autocomplete taken from ui */}
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField sx={{ input: {color:"white"}}} {...params} label="Search Movie" />}
                    />
                </Box>
                <Box display={"flex"}>
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                    {/* when value=0 then 1st tab hilighted, when value=1 then 2nd tab hilighted ... */}
                    {/* in onChange() use 2 parameter bcoz, ony use 'val' then this fun consider in event formate */}
                    <Tab label="Movies" LinkComponent={Link} to='/movies'/>
                    <Tab label="Admin" LinkComponent={Link} to='/admin'/>
                    {/*  LinkComponent it is used for connect to Link (react-router-dom)*/}
                    <Tab label="Auth" LinkComponent={Link} to='/auth'/>
                    <Tab/>
                </Tabs>
                </Box>
                {/* this box similar to div tag */}
            </Toolbar>
        </AppBar>
    )
}

export default MovieHeader
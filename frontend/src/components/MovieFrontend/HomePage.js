import { Box, Button, Typography } from '@mui/material'
import React, {useState,useEffect } from 'react'
import MovieItem from './Movie/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from './API/api-helpers';

const HomePage = () => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => {
            setmovies(data)
        })
    }, [])
    
  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
        <Box width={"80%"} height={"80vh"} margin={"auto"} marginTop={2}>
            <img src='https://e1.pxfuel.com/desktop-wallpaper/344/103/desktop-wallpaper-ratsasan-thumbnail.jpg' alt='Ratsasan' width={"100%"} height={"100%"}/>
        </Box>
        <Box margin={"auto"} marginTop={5}>
            <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
        </Box>
        <Box width={"80%"} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} margin={"auto"}>
            { movies && movies.slice(0,3).map((item) =>
             <MovieItem key={item} 
             id={item.id}
             title={item.title}
              releaseDate={item.releaseDate}
              postUrl={item.postUrl}
              />)}
        </Box>
        <Box display={"flex"} margin={"auto"} padding={5}>
            <Button LinkComponent={Link} to='/movies' variant='outlined' sx={{margin:"auto", color:"2d2b42"}}>View All Movies</Button>
        </Box>
    </Box>
  )
}

export default HomePage
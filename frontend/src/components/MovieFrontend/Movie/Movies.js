import { Box, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import MovieItem from './MovieItem'
import { getAllMovies } from '../API/api-helpers'

const Movies = () => {
   const [movies, setMovies] = useState([])

   useEffect(() => {
     getAllMovies().then((data) => setMovies(data))
   }, [])
   
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
      margin={"auto"}
      variant='h4'
      padding={1}
      width={"40%"}
      bgcolor={"#900c3f"}
      color={"white"}
      textAlign={"center"} > All Movies</Typography>
      <Box width={"100%"} margin={"auto"} display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"}>
        { movies && movies.map((item,i) => <MovieItem  key={i} id={item.title} releaseDate={item.releaseDate} postUrl={item.postUrl}/>) }
      </Box>
    </Box>
  )
}

export default Movies
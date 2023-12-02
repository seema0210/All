import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store'
import MovieMain from './MovieMain'
const MovieMainFile = () => {
  return (
    <>
    {/* <BrowserRouter> */}
        {/* <Provider store={store}> */}
            <MovieMain/>
        {/* </Provider> */}
    {/* </BrowserRouter> */}
    </>
  )
}

export default MovieMainFile
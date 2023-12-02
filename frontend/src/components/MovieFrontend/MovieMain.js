import React from 'react'
import MovieHeader from './MovieHeader'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Provider } from "react-redux"
import HomePage from './HomePage'
import Movies from './Movie/Movies'
import Admin from './Admin/Admin'
import Auth from './Auth/Auth'
import { store } from './store'
const MovieMain = () => {
  return (
    <Router>
      <Provider store={store}>
        <MovieHeader/>
        <section>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </section>
        </Provider>
    </Router>
  )
}

export default MovieMain
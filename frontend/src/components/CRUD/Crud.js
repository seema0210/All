import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from './Add'

const CRUD = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Add/>}/>
            </Routes>
    </Router>
  )
}

export default CRUD
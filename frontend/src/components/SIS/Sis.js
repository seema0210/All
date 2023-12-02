import React from 'react'
import Sidebar from './Sidebar'
import './Sis.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import AddStd from './AddStd'

const Sis = () => {
  return (
    <Router>
      <div className='d-flex'>
        <div className='w-auto '>
          <Routes >
            <Route path='/' element={<Sidebar />} />
            <Route path='/add' element={<AddStd />} />
          </Routes>
        </div>
        <div className='col'>
          <Navbar/>
        </div>
      </div>
    </Router>
  )
}

export default Sis
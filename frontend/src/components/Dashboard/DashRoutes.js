import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dash from './Pages/Dash'
import Inventory from './Pages/Inventory'
import Orders from './Pages/Orders'
import Customers from './Pages/Customers'

const DashRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Dash/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/customers' element={<Customers/>}/>
      </Routes>
  )
}

export default DashRoutes
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Product from './Product'
import Signup from './Signup';

const Routing = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,handleCartClearence}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Product productItems={productItems} handleAddProduct={handleAddProduct}/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart 
            cartItems={cartItems}
             handleAddProduct={handleAddProduct} 
             handleRemoveProduct={handleRemoveProduct}
              handleCartClearence={handleCartClearence}/>}/>
        </Routes>
    </div>
  )
}

export default Routing
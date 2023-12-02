import React, { useState } from 'react'
import data from './back/Data'
import Header from './front/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './front/Routing';
const ShoppingMainFile = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([])

    const handleAddProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if(ProductExist){
        setCartItems(cartItems.map((item) => item.id === product.id ? 
        {...ProductExist, quantity : ProductExist.quantity+1} : item)
      );
    } else{
        setCartItems([...cartItems, {...product, quantity:1}])
      }
    }

    const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if(ProductExist.quantity === 1){
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else{
        setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item ))
      }
    }
    const handleCartClearence = () => {
      setCartItems([])
    }
  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Routing 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} 
        handleCartClearence={handleCartClearence}/>
      </Router>
    </div>
  )
}

export default ShoppingMainFile
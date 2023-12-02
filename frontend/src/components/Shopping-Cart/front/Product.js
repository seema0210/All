import React from 'react'
import './Product.css'
const Product = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
        {
            productItems.map((productItem) => ( // '()' because code, if obj then {} or one lile then not anything.
              <div className='card'>
                <div>
                    <img 
                     className='product-image'
                     src={productItem.image}
                     alt={productItem.name}
                    />
                </div>
                <div>
                    <h3 className='product-name'>{productItem.name}</h3>
                </div>
                <div className='product-price'>${productItem.price}</div>
                <div>
                    <button className='product-button' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                </div>
              </div>
            ))
        }
    </div>
  )
}

export default Product
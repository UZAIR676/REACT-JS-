import React from 'react'
import all_product from "./Asset/all_product"
const ShoppingCard = () => {
  return (
    <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    <div className="product-list">
      {all_product.map((product) => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
   
  </div>
  )
}

export default ShoppingCard

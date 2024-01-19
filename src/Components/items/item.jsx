import React from 'react'
import "./item.css"
const item = (props) => {
  return (
    <div>
     
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
      <div className="item-price-new">
         ${props.new-price}
      </div>
      <div className="item-price-new">
      ${props.old-price}
        </div>
      </div>
      
    </div>
  )
}

export default item
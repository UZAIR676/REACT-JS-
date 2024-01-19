import React from 'react'
import  "./offer.css"
import exclusive_img from  "../Asset/exclusive_image.png"
const Offer = () => {
  return (
    <div className='offers'>
        
      <div className="offer-left">
        <h3>exclusive</h3>
        <h2>offer for you</h2>
        <p>only on best seller product</p>
        <button>check know</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offer

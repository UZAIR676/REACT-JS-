import React, { useContext } from 'react'
import "./css/shopcat.css"
import {  ShopContent } from '../Context/ShopContent'
import dropdown_icons from "../Components/Asset/dropdown_icon.png"
import ShoppingCard from '../Components/ShoppingCard'
const ShopCategory = ({banner}) => {
  // const {all_product}  = useContext(ShopContent)
  return (
    <div className='shopcatagory'>
      <img src={banner} alt="" />
      <div className="shopname">
        <p> <span>showing 1-2</span> out of 36 product </p>
      </div>
      <div className="shopname2">
        <img src={dropdown_icons} alt="" />
      </div>
      <ShoppingCard/>
    </div>
  )
}

export default ShopCategory

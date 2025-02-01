import React from 'react'
import "./css/men.css"

import banner_mens from "../Components/Asset/banner_mens.png"
import product_13 from "../Components/Asset/product_13.png"
import product_14 from "../Components/Asset/product_14.png"
import product_15 from "../Components/Asset/product_15.png"
import product_16 from "../Components/Asset/product_16.png"
import product_17 from "../Components/Asset/product_17.png"
import product_18 from "../Components/Asset/product_18.png"
import product_19 from "../Components/Asset/product_19.png"
import product_20 from "../Components/Asset/product_20.png"
import product_21 from "../Components/Asset/product_21.png"
import product_22 from "../Components/Asset/product_22.png"
import product_23 from "../Components/Asset/product_23.png"
const MenPage = () => {
  return (
    <><div className='upper'>
        <img src={banner_mens} alt="" />
       
    </div>
    <div className='newcollection'>
      <h1>ITEMS FOR MEN</h1>
      <hr />
      <div className="collectio">
        <div className="colo">
          <div className="colomb1">
        <img src={product_13} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
        
       <div className="colonm2">
      <img src={product_14} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
       </div>
      <div className="colomb3">
        <img src={product_20} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4></div>
       <div className="colomb4">
      <img src={product_15} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
       </div>
      </div>
       
      </div>
      <div className="colo 2">
          <div className="colomb1">
         <img src={product_16} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
        
          <div className="colomb2">
         <img src={product_17} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          <div className="colomb3">
         <img src={product_18} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          <div className="colomb4">
         <img src={product_19} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          </div>
          <div className="colo2">
          <div className="colomb1">
         <img src={product_20} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          <div className="colomb1">
         <img src={product_21} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          <div className="colomb1">
         <img src={product_22} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
          <div className="colomb1">
         <img src={product_23} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
       </div> 
          </div>
          
    
  
    </>
    
  )
}

export default MenPage

import React from 'react'
import "./END.css"
import logo_big from '../Asset/logo_big.png';
import whatsapp_icon from '../Asset/whatsapp_icon.png';
import instagram_icon from '../Asset/instagram_icon.png';
import pintester_icon from '../Asset/pintester_icon.png';

const END = () => {
  return (
    <div className='end'>
        <div className="LINE">
            <img src={logo_big} alt="" />
       <h1>SHOPPER</h1>
       </div>
       <div id="info">
        <li>COMPANY</li>
        <li>CONTACT</li>
        <li>OFFICE</li>
        <li>CONTACT</li>
       </div>
       
       <div id="whts">
        <a href="#"><img src={whatsapp_icon} alt="" /></a>
        <a href="#"><img src={instagram_icon} alt="" /></a>
        <a href="#"><img src={pintester_icon} alt="" /></a>

       </div>
    </div>
  )
}

export default END

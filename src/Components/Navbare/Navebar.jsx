import React, { useState } from 'react';
import './Navebar.css'; // Use lowercase "css" here
import Logo from '../Asset/logo.png';
import { Link } from 'react-router-dom';

const Navebar = () => {
  const [menu, setMenu] = useState('SHOP');
  return (
    <div className="Navbare">
      <div className="log">
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="list">
        <li onClick={() => setMenu('SHOP')}>
          <Link style={{textDecoration:"none"}}to="/">SHOP</Link> {menu === 'SHOP' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('MEN')}>
          <Link  style={{textDecoration:"none"}} to="/MEN">MEN</Link>
          {menu === 'MEN' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('WOMEN')}>
          <Link style={{textDecoration:"none"}} to="/WOMEN">WOMEN</Link>
          {menu === 'WOMEN' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('KIDS')}>
          <Link  style={{textDecoration:"none"}}to="/KIDS">KIDS</Link>
          {menu === 'KIDS' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="but">
        <Link to="/Login"><button>LOGIN</button></Link>
        <div id="prob">
        <Link to="/cart"><img src="data:image/jpeg;base64,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" alt="" /></Link>

        </div>
      </div>
    </div>
  );
};

export default Navebar;

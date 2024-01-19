import React from 'react';
import './Popular.css';
import data_product from '../Asset/data';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-in-women'>
        {data_product.map((item, i) => (
          <div key={i} className='popular-item'>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>New Price: {item.new_price}</p>
            <p>Old Price: {item.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;


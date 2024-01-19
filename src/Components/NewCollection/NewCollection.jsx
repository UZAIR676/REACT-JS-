import React from 'react';
import './NewCollection.css'; 
import  product_12 from "../Asset/product_12.png"
import product_13 from "../Asset/product_13.png"
import product_14 from "../Asset/product_14.png"
import product_15 from "../Asset/product_15.png"
import product_16 from "../Asset/product_16.png"
import product_17 from "../Asset/product_17.png"
import product_18 from "../Asset/product_18.png"
import product_19 from "../Asset/product_19.png"




const NewCollection = () => {
  return (
    <div className='newcollection'>
      <h1>new collection</h1>
      <hr />
      <div className="collectio">
        <div className="colo">
          <div className="colomb1">
          <img src={product_12} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
          </div>
        
       <div className="colonm2">
       <img src={product_13} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
       </div>
      <div className="colomb3"><img src={product_14} alt="" />
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
        
       <div className="colonm2">
       <img src={product_17} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
       </div>
      <div className="colomb3"><img src={product_18} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4></div>
       <div className="colomb4">
       <img src={product_19} alt="" />
       <p>striped blupper</p>
       <h4>23$</h4>
       </div> 
    </div>
    </div>
  );
}

export default NewCollection;

import React, { createContext } from "react";
import all_product from "../Components/Asset/all_product";

export const ShopContent = createContext(null);

const ShopContentProvider = (props) => {
  const {contextValue} =  all_product ;
  return (
    <ShopContentProvider value={contextValue}>
       {props.children} 
    </ShopContentProvider>
  );
}

export default ShopContentProvider;

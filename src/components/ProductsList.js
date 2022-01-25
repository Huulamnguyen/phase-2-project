import React from "react";
import ProductItem from "./ProductItem";


function ProductsList({products}){

return (
    <ul className="cards">
      {products.map(product => < ProductItem key={product.id} product={product}/> )}
    </ul>
  );
}

export default ProductsList;

import React from "react";
import ProductItem from "./ProductItem";


function ProductsList({products, onAdd}){

return (
    <ul className="cards block col-2">
      {products.map(product => <ProductItem key={product.id} product={product} onAdd={onAdd}/> )}
    </ul>
  );
}

export default ProductsList;

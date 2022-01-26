import React, {useState} from 'react';
import ProductItem from "./ProductItem";
import Search from "./Search";
import CartHeader from "./CartHeader"
import Cart from "./Cart";

import {useParams} from "react-router-dom";

function Category({products, cartItems, onAdd, onRemove}){

    const [search, setSearch] = useState("")

    const params = useParams();

    function handleCategory(){
        let category = params.category;
        if (params.category === "men-clothing"){
            return category = "men's clothing";
        } else if (params.category === "women-clothing"){
            return category = "women's clothing";
        } else {
            return category;
        }
    }

    const filteredProducts = [...products].filter(product => product.category === handleCategory());

    const displayProducts = [...filteredProducts].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return(
        <div>
            <Search search={search} setSearch={setSearch} />
            <CartHeader countCartItems={cartItems.length} />
            <div className="row">
                <ul className="cards block col-2">
                    {displayProducts.map(product => <ProductItem key={product.id} product={product} onAdd={onAdd}/>)}
                </ul>
                <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
            </div>
        </div> 
        
    )
}

export default Category; 
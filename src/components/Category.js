import React, {useState} from 'react';
import ProductItem from "./ProductItem";
import Search from "./Search";
import {useParams} from "react-router-dom";

function Category({products}){

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
            <ul className="cards">
                {displayProducts.map(product => <ProductItem key={product.id} product={product}/>)}
            </ul>
        </div> 
        
    )
}

export default Category; 
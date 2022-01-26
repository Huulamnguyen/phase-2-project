import React, {useState} from "react";
import Search from "./Search"
import ProductsList from "./ProductsList"

function ProductsPage({products, loadProducts}){
    const [search, setSearch] = useState("")

    const displayProducts = [...products].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <main>
            <Search search={search} setSearch={setSearch}/>
            <ProductsList products={displayProducts} />
        </main>
    )}
export  default ProductsPage;
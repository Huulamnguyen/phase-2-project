import React, {useEffect, useState} from "react";
import Search from "./Search"
import ProductsList from "./ProductsList"

function ProductsPage(){
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const [ issueRequest, setIssueRequest ] = useState(false)

    function loadProducts(){
        fetch("https://fakestoreapi.com/products")
            .then(r => r.json())
            .then(data => {
                setProducts(data)
            })
    }

    useEffect( () => {
        loadProducts()
    },[issueRequest])

    const displayProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <main>
            <Search search={search} setSearch={setSearch}/>
            <ProductsList products={displayProducts} />
        </main>
    )}
export  default ProductsPage;
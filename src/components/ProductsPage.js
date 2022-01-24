import React, {useEffect, useState} from "react";
import Search from "./Search"
import ProductsList from "./ProductsList"



function ProductsPage(){
const [items, setItem] = useState([])
const [search, setSearch] = useState('')

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> 
                {setItem(data)
                console.log(data)
        })
},[])

return (
    <main>
    <Search setItem={setItem} search={search} setSearch={setSearch}/>
    <ProductsList setItem={setItem} search={search} items={items} />
    
    </main>

)
}


export  default ProductsPage;
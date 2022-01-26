import React, {useState} from "react";
import Search from "./Search"
import CartHeader from "./CartHeader"
import Cart from "./Cart";
import ProductsList from "./ProductsList"

function ProductsPage({products, cartItems, onAdd, onRemove}){
    const [search, setSearch] = useState("")

    const displayProducts = [...products].filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <main>
            <Search search={search} setSearch={setSearch}/>
            <CartHeader countCartItems={cartItems.length} />
            <div className="row">
                <ProductsList products={displayProducts} onAdd={onAdd}/>
                <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
            </div>
        </main>
    )}
export  default ProductsPage;
import React from 'react'
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
        <div className="categories">
            <NavLink id="logo" to="/products">Liam&Eve Marketplace</NavLink>
            <NavLink to="/products">All Products</NavLink>
            <NavLink to="/products/categories">Catalog</NavLink>
            <NavLink to="/products/categories/electronics">Electronics</NavLink>
            <NavLink to="/products/categories/jewelery">Jewelery</NavLink>
            <NavLink to="/products/categories/men-clothing">Men's clothing</NavLink>
            <NavLink to="/products/categories/women-clothing">Women's clothing</NavLink>
            {/* <NavLink to="/products/cart">Cart</NavLink> */}
        </div>
    )
}

export default NavBar;
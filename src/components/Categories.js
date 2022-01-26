import React from 'react';
import {Link} from "react-router-dom";

function Categories(){
    return (
        <div>
            <Link to="/products/categories/electronics">Electronics</Link>
            <Link to="/products/categories/jewelery">Jewelery</Link>
            <Link to="/products/categories/men-clothing">Men's clothing</Link>
            <Link to="/products/categories/women-clothing">Women's clothing</Link>

        </div>
    )
}
export default Categories;
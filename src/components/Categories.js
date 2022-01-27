import React from 'react';
import {Link} from "react-router-dom";

function Categories(){
    return (
        <div className="catologlist">
            <Link className="categoryLink" to="/products/categories/electronics">Electronics</Link>
            <Link className="categoryLink" to="/products/categories/jewelery">Jewelery</Link>
            <Link className="categoryLink" to="/products/categories/men-clothing">Men's clothing</Link>
            <Link className="categoryLink" to="/products/categories/women-clothing">Women's clothing</Link>

        </div>
    )
}
export default Categories;
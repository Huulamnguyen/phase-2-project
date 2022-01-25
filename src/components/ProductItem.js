import React from 'react'

function ProductItem({product}){
    const {title, price, rating, image } = product
    return (
        <li className="card">
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {rating.count}</p>
            <p>Rating: {rating.rate}/ 5</p>
            <img src={image} alt={"item name"} />
        </li>
    )
}

export default ProductItem;
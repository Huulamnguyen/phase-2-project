import React from 'react'

function ProductItem({product, onAdd}){
    const {title, price, rating, image } = product
    return (
        <li className="card">
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {rating.count}</p>
            <p>Rating: {rating.rate}/ 5</p>
            <img className="small" src={image} alt={title} />
            <button onClick={()=> onAdd(product)}>Add To Cart</button>
        </li>
    )
}

export default ProductItem;
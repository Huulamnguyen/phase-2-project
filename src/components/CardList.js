import React, {useEffect, useState} from 'react'
import Cart from "./Cart"

function CardList({item, setItem, items}){
    const [clicked, setClicked] = useState(true)
   
    const [displayPrice, setDisplayPrice] = useState(item.price)
     return (
         <li className="card">
          <h4>{item.title}</h4>
          <p>Price: ${displayPrice}</p>
          <p>Rating: {item.rating.rate}/ 5</p>
         <img src={item.image} alt={"item name"} />
         
           
           {clicked ? (
             <button className="primary" onClick={()=>{
              setClicked(false)
           }
           }>In Stock</button>
         ) : (
       <button>Out of Stock</button>
    )}
           <button onClick={()=>{
            fetch(`https://fakestoreapi.com/products/${item.id}`,{
           method: 'DELETE'
           }).then(res=> {
             setItem(item => items.filter(selected => {
                return selected.id !== item.id
              }))
            })
       }}>Delete</button>

      <Cart />
          
       </li>
      );
}

export default CardList;
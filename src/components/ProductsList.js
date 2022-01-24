import React, {useState} from 'react'
import CardList from "./CardList"


function ProductsList({items, search, setItem}){
    console.log(items)
return (
    <ul className="cards">
     {
      items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase())).map((item)=>{
        return <CardList item={item} key={item.id} items={items} setItem={setItem}/>
      })
    }
    </ul>
  );
}

export default ProductsList;

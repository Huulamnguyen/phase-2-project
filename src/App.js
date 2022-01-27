import './App.css';
import React, {useState, useEffect} from 'react'
import ProductsPage from "./components/ProductsPage";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Categories from "./components/Categories";

import {Switch, Route} from "react-router-dom";

const SERVER_URL = 'http://localhost:3001';

function App() {

  const [products, setProducts] = useState([])
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
          loadsCartProducts()
      },[issueRequest])

    // onAdd and onRemove Functions
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const productCart = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        qty: 1
      }

      const existItem = cartItems.find((existItem) => existItem.id === product.id);
      if (existItem){
        fetch(`${SERVER_URL}/cart/${existItem.id}`,{
          method:"PATCH",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            qty: existItem.qty + 1
          })
        }).then(setIssueRequest(!issueRequest))
      } else {
        fetch(`${SERVER_URL}/cart`, {
          method: "POST",
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify(productCart),
        })
        .then(res=>res.json())
        .then(productCart =>{
          console.log(productCart)
          setIssueRequest(!issueRequest)
        })
      }
    };

      function loadsCartProducts(){
        fetch(`${SERVER_URL}/cart`)
        .then(r => r.json())
        .then(data => setCartItems(data))
      }

    const onRemove = (product) => {
      console.log(product.id)
      if (product.qty >= 1){
        fetch(`${SERVER_URL}/cart/${product.id}`,{
          method:"PATCH",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({
            qty: product.qty - 1
          })
        }).then(setIssueRequest(!issueRequest))
      } else {
        fetch(`${SERVER_URL}/cart/${product.id}`,{
          method: "DELETE",
          headers: {"Content-Type":"application/json"}
        }).then(setIssueRequest(!issueRequest))
      }
    };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/products/categories/:category">
          <Category products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </Route>
        <Route path="/products/categories">
          <Categories products={products}/>
        </Route>
        <Route path="/">
          <ProductsPage products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;

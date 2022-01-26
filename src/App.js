import './App.css';
import React, {useState, useEffect} from 'react'
import ProductsPage from "./components/ProductsPage";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Categories from "./components/Categories";
import Cart from "./components/Cart";


import {Switch, Route} from "react-router-dom";


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
    },[issueRequest])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/products/categories/:category">
          <Category products={products}/>
        </Route>
        <Route path="/products/categories">
          <Categories products={products}/>
        </Route>
        <Route path="/products/cart">
          <Cart />
        </Route>
        <Route path="/">
          <ProductsPage products={products} loadProducts={loadProducts}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;

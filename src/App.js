import './App.css';
import React, {useState, useEffect} from 'react'
import ProductsPage from "./components/ProductsPage.js"


function App() {
  return (
    <div className="App">
      <header><img src="LiamEveLogo.png"></img></header>
      <ProductsPage />
      
    </div>
    
  );
}

export default App;

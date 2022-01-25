import './App.css';
import React from 'react'
import ProductsPage from "./components/ProductsPage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductsPage />
    </div>
  );
}

export default App;

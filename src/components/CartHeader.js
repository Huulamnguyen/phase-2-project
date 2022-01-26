import React from 'react'

function CartHeader(props){
  
return (
      <header className="block row center">
        <div>
          
            <h1>Shopping Cart</h1>
          
        </div>
        <div>
            <button>Cart{' '}</button>
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
        </div>
      </header>
  );
}
export default CartHeader;
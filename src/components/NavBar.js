import React from 'react'
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
        <div>
            <header><img src="LiamEveLogo.png"></img></header>
            <a href="#">Home</a>
            <a href="#">Electronics</a>
            <a href="#">Jewelery</a>
            <a href="#">Men's clothing</a>
            <a href="#">Women's clothing</a>
            <a href="#">Cart</a>
        </div>
    )
}

export default NavBar;
import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
// const [menuOpen, setMenuOpen] = useState(false); // 🔹 Add this line at the top inside the component

export const Navbar = () => {
  return (
    <div id='navbar'>
        <h1>LuxeMart</h1>
        <div id='navlinks'>
            <Link to="/">Home</Link>           
            <Link to="/products" > <span>Products</span></Link>
            <Link to="/users" > <span>Users</span></Link>
            <Link to="/recipes"> <span>Recipes</span></Link>
            <Link to="/cartitems"> <PiShoppingCartThin/></Link>
            <Link to="/favitems"> <CiHeart/></Link>

            
        </div>
    </div>
  )
}

import React from 'react'
import { Products } from './Components/Navbar/Navlinks/Products/Products.jsx'
import {Recipes} from './Components/Navbar/Navlinks/Recipes/Recipes.jsx'
import {Users} from './Components/Navbar/Navlinks/Users/Users.jsx'
import {Route, Routes} from 'react-router-dom'
import { Home } from './Components/Navbar/Navlinks/Home/Home.jsx'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { CartItems } from './Components/Navbar/Navlinks/CartItems/CartItems.jsx'
import { FavItems } from './Components/Navbar/Navlinks/FavItems/FavItems.jsx'
import { RecipeSingleCardDetails } from './Components/Navbar/Navlinks/Recipes/RecipeSingleCardDetails.jsx'
import { UserSingleCardDetails } from './Components/Navbar/Navlinks/Users/UserSingleCardDetails.jsx'

import './App.css'
import { ProductSingleCardDetails } from './Components/Navbar/Navlinks/Products/ProductSingleCardDetails.jsx'
export const App = () => {
  return (
    <>
      <Navbar/>
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductSingleCardDetails/>}/>
        <Route path='/users' element={<Users/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/:id' element={<RecipeSingleCardDetails/>} />
        <Route path='/users/:id' element={<UserSingleCardDetails/>} />
        <Route path='/cartitems' element={<CartItems/>} />
        <Route path='/favitems' element={<FavItems/>} />
      </Routes>
      </div>
    </>
  )
}


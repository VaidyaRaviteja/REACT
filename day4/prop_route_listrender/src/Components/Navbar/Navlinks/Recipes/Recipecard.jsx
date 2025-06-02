import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Recipecard = ({menu}) => {
  const navigate = useNavigate()
  return (
    <div className="recipecard">
        {/* <img src={product.images} /> */}
        {/* <img src={recipes.images[0]} alt={product.name || "Recipe"} /> */}
        <img src={menu.image} alt={menu.name || "Recipe"} />
        <p>{menu.cuisine}</p>
        <p>{menu.mealType}</p>
        <span onClick={()=>navigate(`/recipes/${menu.id}`)}>ViewMore</span>
    </div>
  ) 
}

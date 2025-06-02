import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Productcard = ({card}) => {
  const navigate = useNavigate()
  return (
    <div id='productcard'>
      <img src={card.images[0]} alt={card.name || "Product"} />
      <p>{card.title}</p>
      <p>{card.rating}  ⭐</p>
      <p> ₨. {card.price}</p>
      <span onClick={()=>navigate(`/products/${card.id}`)}>ViewMore</span>
    </div>
  ) 
}

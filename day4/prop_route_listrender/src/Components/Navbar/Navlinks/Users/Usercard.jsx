import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Usercard = ({emp}) => {
  const navigate = useNavigate()
  return (
    <div id='usercard'>
        <img src={emp.image}/>
        <h1>{emp.username}</h1>
        <p>{emp.role}</p>
        <p>{emp.address.state}</p>
        <span onClick={()=>navigate(`/users/${emp.id}`)} >ViewMore</span>
    </div>
  )
}
 
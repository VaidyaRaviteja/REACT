import { Recipedata } from './Recipedata.jsx'
import { Recipecard } from './Recipecard.jsx'
import React from 'react'
import './Recipes.css'
export const Recipes = () => {
  return (
    <div id='recipes'> 
      <h2>Recipes Informartion</h2>
      <div id='recipesinfo'>
        {
          Recipedata.recipes.map((recipe) => {
            return(
              
              <React.Fragment key={recipe.id} >
              <Recipecard menu={recipe} />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

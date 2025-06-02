import React from "react";
import { Recipedata } from "./Recipedata";
// import { Recipes } from "./Recipes";
import { useParams } from "react-router-dom";
import './RecipeSingleCardDetails.css'
export const RecipeSingleCardDetails = ()=>{
    const params = useParams()

    const matchedRecipe = Recipedata.recipes.find((x)=>x.id === Number(params.id))
    return (
        <>  
            { matchedRecipe !== undefined ? ( <div id="singlecard">  <div id="singlecardcontent">
                <img src ={matchedRecipe.image} width={100} />
                <div id="singlecardinfo">
                <h1>{matchedRecipe.name}</h1>
                <h2>Ingredients</h2>
                <ul id="ol1">
                    {matchedRecipe.ingredients.map((x,i)=>{
                        return (
                        
                            <li key={i}>{x}</li>
                        )
                    })}
                </ul>
                <h2>Instructions</h2>
                <ul id="ol2">
                    {matchedRecipe.instructions.map((x,i)=>{
                        return(
                            <li key={i}>{x}</li>
                        )
                    })
                    }
                </ul>
                </div>
                </div></div>): "No Recipe found with given id"  
            }
        </>
    )
}
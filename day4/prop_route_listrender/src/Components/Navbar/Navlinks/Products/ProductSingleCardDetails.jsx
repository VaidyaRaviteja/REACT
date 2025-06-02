import React from "react";
import { productdata } from "./Productsdata.jsx";
// import { Recipes } from "./Recipes";
import { useParams } from "react-router-dom";
import './ProductSingleCardDetails.css'
export const ProductSingleCardDetails = ()=>{
    const params = useParams()

    const matchedProduct = productdata.products.find((x)=>x.id === Number(params.id))
    return (
        <>  
            { matchedProduct !== undefined ? ( <div id="productsinglecard">  <div id="productsinglecardcontent">
                <img src ={matchedProduct.images[0]} />
                <div id="productsinglecardinfo">
                <h1>{matchedProduct.title}</h1>
                <p>{matchedProduct.warrantyInformation}</p>
                <p>{matchedProduct.shippingInformation}</p>
                <p>{matchedProduct.availabilityStatus}</p>
                <p>{matchedProduct.returnPolicy}</p>
                <p>Minimum Order: {matchedProduct.minimumOrderQuantity}</p>
                </div>
                </div></div>): "No Recipe found with given id"  
            }
        </>
    )
}
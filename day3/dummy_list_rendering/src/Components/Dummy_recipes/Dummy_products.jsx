import { recipes } from './Dummy_data.jsx'
// import {recipes} from "./Components/Dummy_recipes/Dummy_data.jsx";
import './dummy_products.css'

export const Dummy_products = () =>{
    return (
        <div className='dummy_compo' >
            <h1>Dummy Products</h1>
            <div className='dummy_products'>
                {recipes.map((product,index)=>{
                    return(
                        <div className='card' key={product.id || index}>
                            <img src={product.image} />
                            <h3>{product.name}</h3>
                            <p> Meal Type : {product.mealType}</p>
                            <p> Cuisine : {product.cuisine}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
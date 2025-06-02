import { productdata } from "./Productsdata.jsx"
import { Productcard } from "./Productcard.jsx"
import './Products.css'
export const Products = () => {
  return (
    <div id="products">
      <h2>Products Information</h2>
      <div id="productinfo">
        {
          productdata.products.map((product) =>{
            return (
              <Productcard card={product} key={product.id} />
            )
          }) 
        }
      </div>
    </div>
  )
} 

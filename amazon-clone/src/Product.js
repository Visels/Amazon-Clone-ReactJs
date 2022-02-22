import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
  return (
    
    <div className="product">

                  
              <div className="product__info">
              
              <p>{title}</p>

              <p className="product__price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>

              <div className="product__rating">


              {Array(rating).fill().map((_,i) => {
                
                return <p>⭐</p>
                
              })}



                  


              </div>
              

              <img src={image} />
              
              <button>Add to Basket</button>
              
                  
              </div>        
                  
  
    </div>


  )
}

export default Product
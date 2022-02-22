import React from 'react'
import './Product.css'

function Product() {
  return (
    
    <div className="product">

        
    <div className="product__info">
    
    <p>Original HP 67XL Black High-yield Ink Cartridge |
         Works with HP DeskJet 1255, 2700, 4100 Series, 
         HP ENVY 6000, 6400 Series | Eligible for Instant
          Ink | 3YM57AN</p>

    <p className="product__price">
        <small>$</small>
        <strong>19.99</strong>
    </p>

    <div className="product__rating">

        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>

    </div>
    

    <img src="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg" alt="" />
    
    <button>Add to Basket</button>
    
    </div>        
        
        
  
    </div>


  )
}

export default Product
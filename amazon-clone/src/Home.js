import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        
    <div className="home__container">
    
    <img
    className='home__image' 
    src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg" alt="amazon_banner" />
    
    <div className="home__row">
        <Product
        
        title= "Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for InstantInk | 3YM57AN"
        price = {29.99}
        image = "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
        rating = {4}
        
        />
        <Product
        
        title= "Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for InstantInk | 3YM57AN"
        price = {29.99}
        image = "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
        rating = {4}
        
        />
    {/* Product */}
    {/* Product */}

    </div>

    <div className="home__row">
        {/* <Product /> */}
        {/* <Product /> */}
        {/* <Product /> */}
    {/* Product */}
    {/* Product */}
    {/* Product */}


    </div>
    <div className="home__row">

    {/* Product */}


    </div>


    </div>        
        
        
    </div>
  )
}

export default Home
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
        <Product />
        <Product />
        <Product />
    {/* Product */}
    {/* Product */}

    </div>

    <div className="home__row">
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
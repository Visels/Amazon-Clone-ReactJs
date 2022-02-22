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
        
        title= "HP Stream 14-inch Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Windows 10 Home in S Mode with"
        price = {249.99}
        image = "https://m.media-amazon.com/images/I/81RCOr3hJOL._AC_UY218_.jpg"
        rating = {3}
        
        />
    {/* Product */}
    {/* Product */}

    </div>

    <div className="home__row">
        {/* <Product /> */}
        <Product
        
        title= "Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
        price = {9.79}
        image = "https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL320_.jpg"
        rating = {5}
        
        />

        <Product
        
        title= "VIZIO 65-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision"
        price = {350.79}
        image = "https://m.media-amazon.com/images/I/81ii3VScCbL._AC_UL320_.jpg"
        rating = {4}
        
        />


        <Product
        
        title= "HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)"
        price = {210.99}
        image = "https://m.media-amazon.com/images/I/612G5AUOZWL._AC_UL320_.jpg"
        rating = {5}
        
        />


        {/* <Product /> */}
        {/* <Product /> */}
    {/* Product */}
    {/* Product */}
    {/* Product */}


    </div>
    <div className="home__row">

    {/* Product */}
        <Product
        
        title= "FORGING MOUNT Long Extension TV Mount Corner Wall Mount TV Bracket Full Motion with 30 inch Long Ar"
        price = {80.99}
        image = "https://m.media-amazon.com/images/I/61S5DF-5SQL._AC_UL320_.jpg"
        rating = {5}
        
        />



    </div>


    </div>        
        
        
    </div>
  )
}

export default Home
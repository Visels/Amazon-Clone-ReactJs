import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        
        <img
        className='header__logo'
         src='http://pngimg.com/uploads/amazon_PNG11.png'
         />

    <div
     className='header__search'>
      <input className='header__search' type = "text"></input>


    </div>
           
         
        
        </div>
  )
}

export default Header
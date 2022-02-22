import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {


  
  return (
    <div className='header'>
        <Link to="/">
        <img
        alt='amazon--logo'
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
        />
        </Link>

    <div className='header__search'>
      
      <input 
      className='header__search'
       type = "text">
       </input>
       <SearchIcon className = "header__searchIcon"/>
    </div>

    <div className='header__nav'>  

    <div className="header__option">
    <span className='header__optionLineOne'>Hello Guest</span>
    <span className='header__optionLineTwo'>Sign In</span>
    </div>

    
    <div className='header__option'>
    <span className='header__optionLineOne'>Returns</span>
    <span className='header__optionLineTwo'>&Orders</span>

    </div>

    <div className='header__option'>
    <span className='header__optionLineOne'>Your</span>
    <span className='header__optionLineTwo'>Prime</span>

    </div>

    <div className='header__option'>

    </div>
    
      <div className="header__optionBasket">

        <Link to="/checkout">

      <ShoppingBasketIcon />

        </Link>
        

      <span className="header__optionLineTwo header__basketCount">0</span>
      </div>


    </div>
           
         
        
    </div>
  )

}

export default Header
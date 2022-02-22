import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>


                <div className="checkout__left">

                <img
                className='checkout__ad' 
                src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="" />

                <div >
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>

                </div>



                </div>



                <div className="checkout__right">

                    <Subtotal />




                </div>


        
        
        </div>
  )
}

export default Checkout
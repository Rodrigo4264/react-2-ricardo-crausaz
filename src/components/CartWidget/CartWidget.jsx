import React from 'react'
import './cartWidget.css'
import cart from '../../assets/cartWidget.svg'

const CartWidget = () => {
  return (
    <div className='cartwidget-container'>
        <p className='cartwidget-contador'>1</p>
        <img src={cart} className='cartwidget-img'/>
        

    </div>
  )
}

export default CartWidget
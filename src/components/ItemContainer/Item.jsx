import React from 'react'
import './Item.css'
import AddCrart from '../Botones/Addcrart/AddCrart'
import SeeDetail from '../Botones/SeeDetail/SeeDetail'

export const Item = ({producto}) => {
    
  return (
    <div className='item-container'>
        <div className='item-title-container'>
        <h4 className='item-desc-title'> {producto.name}</h4>
        </div>
        <img className='item-desc-img' src={producto.img}/>
        <div className='item-desc'>
            <p className='item-desc-price'>Precio: ${producto.price}</p>
            <p className='item-desc-price'>Autor: {producto.author}</p>
            <AddCrart props={producto}/>
            <SeeDetail props={producto}/>
        </div>
        

    </div>
  )
}

import React from 'react'
import './ItemDetail.css'
import AddCrart from '../Botones/Addcrart/AddCrart'

const ItemDetail = ({item}) => {
  return (
    <div className="ItemDetail-container">
        <div className="producto-detalle">
            <img src={item.img} alt={item.name} className='ItemDetail-img' />
            <div className='ItemDetail-detail'>
                <h3 className="ItemDetail-name">{item.name}</h3>
                <p className="ItemDetail-category">Categoría: {item.category}</p>
                <p className="ItemDetail-price">Precio: ${item.price}</p>
                <AddCrart props={item}/>

                <p className="ItemDetail-resume">{item.resume}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
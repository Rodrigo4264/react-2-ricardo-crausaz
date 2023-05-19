import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const item = (props) => {
  return (
    <Link to={`/item/${props.id}`} className='hahah'>
      <div>
        <div className="multicarrusel-item-card">
            <h3 className='multicarrusel-item-name'>{props.name}</h3>
            <img className='multicarrusel-item-img' src={props.img} alt="product image" />
            <p className="multicarrusel-item-price">{props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default item
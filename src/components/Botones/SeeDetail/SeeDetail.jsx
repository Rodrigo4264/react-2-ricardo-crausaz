import React from 'react'
import './seedetail.css'
import { Link } from 'react-router-dom'

const SeeDetail = ({props}) => {

  return (
    <div className='seedetail-contenedor'>  
        <Link to={`/item/${props.id}`} className='seedetail'>VER DETALLE </Link>
    </div>
    
  )
}

export default SeeDetail
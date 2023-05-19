import React, { useState } from 'react'
import './addcrart.css'

const AddCrart = ({props}) => {
  
const [contador, setcontador] = useState(0);

function reducirContador(){
   if(contador>0) setcontador(contador-1)
}

function aumentarContador(){
   if(contador<props.stock) setcontador(contador+1)
}

  return (
    <div className='addchart-contenedor'>
    <button className='addchart-btn' onClick={reducirContador}>-</button>
    <p className='addchart-contador'>{contador}</p>
    <button className='addchart-btn'  onClick={aumentarContador}>+</button>
    </div>
  )
}

export default AddCrart
import React, { useEffect, useState } from 'react'
import { pedirItemporID } from '../../data/Adquirirdata'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ( ) => {

 const [item, setItem]= useState(null)
 const id = useParams().id
 
useEffect(()=>{
 pedirItemporID(id)
 .then((res)=>{
    setItem(res)
 })
},[id])

  return (
    <div>        
        {item && <ItemDetail item={item}/> }
    </div>
  )
}

export default ItemDetailContainer
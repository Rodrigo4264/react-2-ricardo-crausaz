import React from 'react'
import ItemListContainer from '../../components/ItemContainer/ItemListContainer'
import Carrusel from '../../components/Carrusel/Carrusel';

const Libro = () => {

  const img_libro = [
    {id:'im_libro1', imgu:'./src/assets/ImagenLibro/img1.png'}, 
    {id:'im_libro2', imgu:'./src/assets/ImagenLibro/img2.png'},
    {id:'im_libro3', imgu:'./src/assets/ImagenLibro/img3.png'},
    {id:'im_libro4', imgu:'./src/assets/ImagenLibro/img4.png'} 
  ];

  return (
    <div>
        <Carrusel content={img_libro}/>
        <ItemListContainer cat='Libro' />
    </div>
  )
}

export default Libro
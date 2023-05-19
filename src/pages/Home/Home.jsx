import React from 'react'
import MulticarruselContainer from '../../components/Multicarrusel/MulticarruselContainer'
import ItemListContainer from '../../components/ItemContainer/ItemListContainer'
import Carrusel from '../../components/Carrusel/Carrusel'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {

  const img_home = [
    {id:'im_home1', imgu:'./src/assets/ImagenHome/img1.png'}, 
    {id:'im_home2', imgu:'./src/assets/ImagenHome/img2.png'}
  ];

  return (
    <div>
        <Carrusel content={img_home}/>
        <p className='home_subtitle'>Libros</p>
        
        <hr  style=" height:5px;background:#0a0a0a;margin-top:0" />
        <MulticarruselContainer cat='Libro'/>
        <p className='home_subtitle'>Musica</p>
        <hr  style=" height:5px;background:#000;margin-top:0" />
        <MulticarruselContainer cat='Musica'/>
        <p className='home_subtitle'>Peliculas</p>
        <hr  style=" width: 90%; height:5px;background:#000;margin-top:0" />
        <MulticarruselContainer cat='Pelicula'/>
    </div>
  )
}

export default Home
import React from 'react'

const CArruselItem = ({content}) => {
  return (
    <div>
        {
        content.map( (imagen,index) =>( 
        <div 
        key={imagen.id} 
        className={`carousel-item ${index===0? 'active': ''}`}
        >
            <img src={imagen.imgu} 
            className="d-block w-100 carrusel-img" 
            alt="propaganda"/>
        </div> ))
        }
    </div>
  )}

export default CArruselItem
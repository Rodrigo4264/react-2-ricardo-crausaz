import React, { useEffect, useState } from "react";
import {Adquirirdata} from '../../data/Adquirirdata'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./item";

const MulticarruselContainer = ({cat}) => {
    
    const [productos, setProductos]=useState([])

    useEffect(() => {
      Adquirirdata().then((res)=>{
        if(cat){    
            setProductos(res.filter((pro)=>pro.productype===cat))
        }  
    })
}, [cat])

    //****************************************************************************** */
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1250 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 1250, min: 850 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 850, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
//  *******************************************************************************************
const product = productos.map(item=>(
<Item 
  img={item.img}
  id={item.id}
/>))
//******************************************************************************************** */
  return (
    <div>
      <Carousel responsive={responsive}>
          {product}
      </Carousel>;
    </div>
  )
}

export default MulticarruselContainer
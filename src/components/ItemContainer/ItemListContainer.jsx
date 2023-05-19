import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import { ItemList } from "./ItemList";
import { Adquirirdata } from "../../data/Adquirirdata";
import { useParams } from "react-router-dom";


function ItemListContainer ({cat}){

const [productos, setProductos]=useState([])

console.log(cat)
useEffect(() => {
    Adquirirdata().then((res)=>{
        if(cat){         
            setProductos(res.filter((pro)=>pro.productype===cat))
        }else{          
            setProductos(res)
        }   
    })
}, [cat])

    return(        
            <div className="ItemListContainer">    
                <ItemList productos={productos}/>    
            </div>        
    )
}
export default ItemListContainer;
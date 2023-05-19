import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav className='navbar-items'>
          <Link to='/' className='navbar-logo'> Ateneo Libros </Link> 
          <ul className='navbar-ul'>
            <li> <Link to='/Libro' className='navbar-menu'>Libros</Link>   </li>
            <li> <Link to='/Musica' className='navbar-menu'>Musica</Link>   </li>
            <li> <Link to='/Pelicula' className='navbar-menu'>Peliculas</Link>   </li>
            <li> <Link to='/Promocion' className='navbar-menu'>Promociones</Link>   </li>
          </ul>
          <CartWidget/>
        </nav>  
    </div>
  )
}

export default Navbar
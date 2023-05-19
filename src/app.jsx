import { BrowserRouter, Route, Routes } from "react-router-dom";
import MulticarruselContainer from "./components/Multicarrusel/MulticarruselContainer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Libro from "./pages/Libro/Libro";
import Musica from "./pages/Musica/Musica";
import Pelicula from "./pages/Pelicula/Pelicula";
import Promocion from "./pages/Promocion/Promocion";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemContainer/ItemListContainer";
import PageNotFound from "./components/Pagnotfound/PageNotFound";

export function App() {
  
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route  path='/Libro' element={<Libro/>}/>
          <Route  path='/Musica' element={<Musica/>}/>
          <Route  path='/Pelicula' element={<Pelicula/>}/>
          <Route  path='/Promocion' element={<Promocion/>}/>
          <Route  path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

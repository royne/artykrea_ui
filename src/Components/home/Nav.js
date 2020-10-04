import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  return ( 
    <nav className="nav_header">
      <Link to="/">HOME</Link>
      <Link to="/">QUIENES SOMOS</Link>
      <Link to="/">CATALOGO</Link>
      <Link to="/">CONTACTO</Link>
      <Link to="/">TIENDA</Link>
    </nav>
   );
}
 
export default Nav;
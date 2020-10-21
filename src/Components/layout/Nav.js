import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  return ( 
    <nav className="nav_header">
      <div className="nav_box">
        <Link to="/" className="link_nav_menu">MENU</Link>
      </div>
      <div className="nav_box">
        <Link to="/productos" className="link_nav_category">categorias</Link>
      </div>
      <div className="nav_box">
        <Link to="/" className="link_nav_shop">TIENDA</Link>
      </div>
    </nav>
   );
}
 
export default Nav;
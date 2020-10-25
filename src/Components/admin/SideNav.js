import React from 'react';
import logo from '../../assets/images/logo_pink.png'

const SideNav = () => {
  return ( 
    <div className="side_nav">
      <img src={logo} alt="artykrea"/>
      <div className="side_nav_menu">
        <ul>
          <li>Nuevo Producto</li>
          <li>Inventario</li>
        </ul>
      </div>
    </div>
   );
}
 
export default SideNav;
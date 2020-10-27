import React from 'react';
import logo from '../../assets/images/logo_pink.png'

const SideNav = ({setComponent}) => {
  const getComponent = e => {
    let name = e.target.getAttribute('name')
    setComponent(name)
  }

  return ( 
    <div className="side_nav">
      <img src={logo} alt="artykrea"/>
      <div className="side_nav_menu">
        <ul>
          <li onClick={getComponent} name="Form">Nuevo Producto</li>
          <li onClick={getComponent} name="List">Inventario</li>
        </ul>
      </div>
    </div>
   );
}
 
export default SideNav;
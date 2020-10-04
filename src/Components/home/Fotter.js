import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo_foot.png'

const Fotter = () => {
  return ( 
    <footer>
      <nav className="nav_header nav_fotter">
        <Link to="/">HOME</Link>
        <Link to="/">QUIENES SOMOS</Link>
        <Link to="/">CATALOGO</Link>
      </nav>
      <div className="box_links">
        <div className="box_links_info">
          <ul>
            <li><Link to="/">Nosotros</Link></li>
            <li><Link to="/">Quejas y Reclamos</Link></li>
            <li><Link to="/">Contacto</Link></li>
          </ul>
        </div>
        <div className="box_links_info">
          <ul>
            <li><Link to="/">Despachos y Entregas</Link></li>
            <li><Link to="/">Actividades y promociones</Link></li>
            <li><Link to="/">Politica de información.</Link></li>
          </ul>
        </div>
        <div className="box_links_info">
          <ul>
            <li>Lunes a Viernes: 7am - 7pm</li>
            <li>Sabados: 8am - 5pm</li>
            <li>Domingos: 8am - 2pm</li>
          </ul>
        </div>
      </div>
      <img src={Logo}/>
    </footer>
   );
}
 
export default Fotter;
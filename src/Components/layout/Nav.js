import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from '@emotion/styled'
import logo from '../../assets/images/logo_pink.png'

const HeaderNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  top: 60px;
  left: 0;
  box-sizing: border-box;
  display: flex;
  background: #1F2327;
  z-index: 10;
  .box_logo {
    width: 15%;
    display: flex;
    justify-content: center;
    & > img {
      max-height: 100px;
    }
  }
  .box_links {
    width: 85%;
    height: 100px;
    display: flex;
    align-items: center;
    font-family: agency;
    font-size: 2.2rem;
    & > a {
      margin-right: 20px;
    }
  }
`;

const Nav = () => {
  return (
    <HeaderNav className="">
      <div className="box_logo">
        <img src={logo} alt="Artykrea" />
      </div>
      <div className="box_links">
        <NavLink
          to="/"
          exact
          activeStyle={{
            color: "#cf777a"
          }}
        >
          MENU
        </NavLink>
        <NavLink
          to="/productos"
          activeStyle={{
            color: "#cf777a"
          }}
        >
          CATEGORIAS
        </NavLink>
        <NavLink
          to="/tienda"
          activeStyle={{
            color: "#cf777a"
          }}
        >
          TIENDA
        </NavLink>
        <NavLink
          to="/contacto"
          activeStyle={{
            color: "#cf777a"
          }}
        >
          CONTACTO
        </NavLink>
      </div>
    </HeaderNav>
  );
}
 
export default Nav;
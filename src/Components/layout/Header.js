import React from 'react'
import styled from '@emotion/styled'
import face from '../../assets/images/icons/logo_face.png'
import insta from '../../assets/images/icons/logo_inst.png'
import car from '../../assets/images/icons/car.png'
import what from '../../assets/images/icons/logo_what.png'

const HeaderBox = styled.header`
  position: fixed;
  background: #000;
  max-width: 100%;
  min-width: 100%;
  height: 60px;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display:flex;
  z-index: 10;
`
const BoxBlank = styled.div`
  width: 15%;
  height: 60px;
  background: #1f2327;
`;
const Social = styled.div`
  width: 42%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  & > img {
    max-width: 40px;
    height: auto;
    margin-right: 5px;
    cursor: pointer;
  }
`;
const Info = styled.div`
  width: 42%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & img {
      width: 45px;
      margin-right: 10px;
    }
    & span {
      color: #c23c57;
      font-family: agency;
      font-size: 1.5rem;
    }
    & p {
      color: #cf777a;
      font-family: agency;
      font-size: 2rem;
    }
  }
`;

const Header = () => {
  return ( 
    <HeaderBox>
      <BoxBlank />
      <Social>
        <img src={face} alt="facebook"/>
        <img src={insta} alt="instagram"/>
        <img src={car} alt="carrito"/>
      </Social>
      <Info>
        <div>
          <img src={what} alt="whatsapp"/>
          <span>+ 57 3013622354</span>
        </div>
        <div>
          <p>artykrea.shop</p>
        </div>
      </Info>
    </HeaderBox>
   );
}
 
export default Header;
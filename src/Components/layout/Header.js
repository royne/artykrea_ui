import React from 'react'
import styled from '@emotion/styled'
import face from '../../assets/images/icons/logo_face.png'
import insta from '../../assets/images/icons/logo_inst.png'
import car from '../../assets/images/icons/car.png'
import what from '../../assets/images/icons/logo_what.png'

const HeaderBox = styled.header`
  position: fixed;
  background: #201815;
  width: 85%;
  height: 60px;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display:flex;
  `
const Social = styled.div`
  width: 50%;
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
  width: 50%;
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
    }
    & p {
      color: #cf777a;;
    }
  }
`;

const Header = () => {
  return ( 
    <HeaderBox>
      <Social>
        <img src={face} />
        <img src={insta} />
        <img src={car} />
      </Social>
      <Info>
        <div>
          <img src={what} />
          <span>+ 57 3013622354</span>
        </div>
        <div>
          <p>Artykrea.shop</p>
        </div>
      </Info>
    </HeaderBox>
   );
}
 
export default Header;
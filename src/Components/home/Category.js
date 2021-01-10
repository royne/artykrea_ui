import React from 'react';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import patern from '../../assets/images/patron.png'

const Card = styled.div`
  position: relative;
  width: 22%;
  height: 40vh;
  display: flex;
  background: url(${patern});
  background-size: contain;
  background-color: ${(props) => (props.bg === "pink" ? "#C7596B" : "#12181C")};
  padding: 2%;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  & > img {
    max-height: 80%;
    max-width: 80%;
  }
`; 
const BoxType = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg === "pink" ? "#1F2327" : "#CF777A")};
  &>span{
    font-family: absolute;
    font-size: 2rem;
  }
`;
const CardFoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 10vh;
  background-color: ${(props) => (props.bg === "pink" ? "#C23C57" : "#201815")};
  padding: 2% 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 1.7rem;
    font-family: absolute;
  }
  .btn {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #191c1f;
    font-size: 1.5rem;
    font-family: absolute;
    &:hover{
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 5px 10px rgba(0,0,0,0,0.7);
    }
  }
`;

const Category = ({ data, bg }) => {
  return (
    <Card bg={bg}>
      <img src={data.url} />
      <BoxType bg={bg}>
        <span>{data.type}</span>
      </BoxType>
      <CardFoot bg={bg}>
        <p>{data.name}</p>
        <div className="btn">VER</div>
      </CardFoot>
    </Card>
  );
}
 
export default Category;
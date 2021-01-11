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
  background-color: ${(props) => (props.bg === "pink" ? "#D07C8F" : "#12181C")};
  padding: 2%;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  box-shadow: 0 5px 10px rgba(92,92,92, 0.5);
  & > img {
    max-height: 80%;
    max-width: 80%;
    transition: all 1s ease-in-out;
    &:hover {
      transform: scale(1.4);
      z-index: 5;
      cursor:pointer;
    }
  }
`; 
const BoxType = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg === "pink" ? "#d793a4" : "#1F2327")};
  & > span {
    font-family: agency;
    font-size: 1.5rem;
  }
`;
const CardFoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 10vh;
  background-color: ${(props) => (props.bg === "pink" ? "#C23C57" : "#000")};
  padding: 2% 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(92, 92, 92, 0.5);
  & > p {
    font-size: 1.6rem;
    font-family: CaviarDreams;
    line-height: 1;
  }
`;
const Btn = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d793a4;
  font-size: 1rem;
  font-family: CaviarDreams;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: ${(props) => (props.bg === "pink" ? "#d793a4" : "#1F2327")};
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
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
        <Btn bg={bg}>VER</Btn>
      </CardFoot>
    </Card>
  );
}
 
export default Category;
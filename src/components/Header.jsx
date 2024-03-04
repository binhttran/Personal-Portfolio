import styled from 'styled-components';
import React from 'react';
import Navigation from './Nagivation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Name = styled.h1`
    color: #436850;
    text-align: center;

`;

const Description =styled.a`
    color: #ADBC9F;
    text-align: center;
    text-decoration: none;
    font-weight: bold;  

    &:hover {
      color: darkred ; 
  }
`;

const Div = styled.div`
    background-color: #D7E4C0;
    display: flex;
    flex-direction: column; 
    height: 100vh; 
    justify-content: center;
    align-items: center;
`;

const Header = () => {
  return (
    <Div>
      <Name>Binh Tran</Name>
      <Description href={"https://www.bu.edu/cs/"} target="_blank"> CS student at Boston University</Description>
      <Navigation/>
    </Div>

  );
}

export default Header;

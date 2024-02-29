import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import AboutMe from "./About.jsx"
import React from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import Experience from './Experience';

const Name = styled.h1`
    color: #436850;
    text-align: center;

`;

const Description =styled.h3`
    color: white;
    text-align: center;
`;

const Div = styled.div`
    background-color: #D7E4C0;
    display: flex;
    flex-direction: column; 
    height: 100vh; 
    justify-content: center;
    align-items: center;
`;

const List = styled.li`
    color: #436850;
    list-style: none; 
    padding: 5px;
    margin-right: 50px;

    
`;
const ListUl = styled.ul`
    text-align: center;
`;

const Header = () => {
  return (
    <Div>
        <Name>Binh Tran</Name>
            <Description> CS student at Boston University</Description>
    <BrowserRouter>
      <Routes>
        <Navigation />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/experience" element={<Experience/>} />         
      </Routes>
    </BrowserRouter>
    </Div>

  );
}

export default Header;

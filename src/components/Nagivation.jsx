import React from 'react';
import styled from 'styled-components';

const List = styled.li`
    color: #436850;
    list-style: none; 
    padding: 5px;
    margin-right: 50px;
`;
const ListUl = styled.ul`
    text-align: center;
`; 

const StyledA= styled.a`
  color:#436850;
  text-decoration: none;
  font-weight: bold;
  transition: font-size 0.3s;

  &:hover {
    font-size: 1.3em; /* Increase font size on hover */
  }

`;

function Navigation(){
  return (
    <nav>
      <ListUl>
        <List>
          <StyledA href="#about">About</StyledA>
        </List>
        <List>
          <StyledA href="#projects">Projects</StyledA>
        </List>
        <List>
          <StyledA href="#experience">Experience</StyledA>
        </List>
        <List>
          <StyledA href="#skills">Skills</StyledA>
        </List>
      </ListUl>
    </nav>
  );
}

export default Navigation;

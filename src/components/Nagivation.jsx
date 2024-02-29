import React from 'react';
import { Link } from 'react-router-dom';


const List = styled.li`
    color: #436850;
    list-style: none; 
    padding: 5px;
    margin-right: 50px;

    
`;
const ListUl = styled.ul`
    text-align: center;
`; 

const Navigation = () => {
  return (
    <nav>
      <ListUl>
        <List><Link to="/">Home</Link></List>
        <List><Link to="/projects">projects</Link></List>
        <List><Link to="/experience">experience</Link></List>
      </ListUl>
    </nav>
  );
}

export default Navigation;

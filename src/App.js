import logo from './logo.svg';
import './App.css';
// import About from './About';
// import Experience from './Experience';
import Header from './components/Header';

import styled from 'styled-components';
import Main from './components/Main'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;

import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main'

const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  width: 30%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto; 
`;
const RightContainer = styled.div`
  width: 70%;
  position: relative;
  margin-left: 30%; 
  overflow-y: auto;
`;

function App() {
  return (
    <Container>
      <LeftContainer><Header/></LeftContainer>
      <RightContainer><Main/></RightContainer>
    </Container>
  );
}

export default App;

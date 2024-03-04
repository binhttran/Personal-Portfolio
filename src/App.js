import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main'

import AboutMe from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  width: 30%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;


  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
  background-size: cover; /* Ensure the background image covers the entire container */
  background-position: center; /* Center the background image */
  min-height: 100vh; /* Set minimum height to fill the viewport */



`;
const RightContainer = styled.div`
  width: 70%;
  position: relative;
  margin-left: 30%; 
`;


 
function App() {
  const backgroundImageUrl = 'background.jpg';
  return (

    <Container>
      <LeftContainer backgroundImageUrl={backgroundImageUrl}><Header/></LeftContainer>
      <RightContainer><Main/></RightContainer>
    </Container>
  );
}

export default App;

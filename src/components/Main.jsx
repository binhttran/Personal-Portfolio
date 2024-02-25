import AboutMe from './About';
import Experience from './Experience';
import Projects from './Projects'
import Skills from './Skills'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center; 
    max-width: 100%;
`;

export default function Main(){
    return(
        <Container>
            <AboutMe/>
            <Experience/>
            <Projects/>
            <Skills/>
        </Container>
    )

}
import AboutMe from './About';
import Experience from './Experience';
import Projects from './Projects'
import Skills from './Skills'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
`;

export default function Main(){
    return(
        <Container >
            <AboutMe/>
            <Experience/>
            <Projects/>
            <Skills/>
        </Container>
    )

}
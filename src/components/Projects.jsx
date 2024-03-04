
import styled from 'styled-components';


const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #436850;
    padding-right: 70px;


    @media (max-width: 1000px){
        margin: auto;    
    }
`;

const Line = styled.hr`
    border: 1px solid #ADBC9F;
    margin-left: 50px; 
    margin-top: 5px; 
    width: 95%; 

`;

const SectionTitle = styled.h3`
    color: #ADBC9F;
    text-align: left;
    margin: 15px 50px;

    @media (max-width: 1000px) {
        text-align: center;
        margin-left: 90px;
}
`;


const SubTitle = styled.h3`
    color: #ADBC9F;
    text-align: center; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;
const Description = styled.p`
    color: #FBFADA;
    line-height: 1.5;
    margin-top: 0;
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
    
    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;
const Dates = styled.p`
    color: #FBFADA;
    text-align: center;
    margin-left: 50px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
        margin-left: 50px;
    }
`; 

const Wrapper2 = styled.div`
    transition: background-color 0.3s;
    border-radius: 10px;
    padding:10px;  

    &:hover {
        background-color: #668470; 
    }
`;

const StyledLink = styled.a`
    color: #ADBC9F;
    text-decoration: none;
`;



export default function Projects(){
    return(
        <Container id='projects'>
                    <SectionTitle>Projects</SectionTitle>
                    <Line/>
                    <Wrapper> 
                        <Dates>September 2023 - December 2023</Dates>
                        <Wrapper2>
                            <SubTitle>
                                <b><StyledLink href="https://sites.bu.edu/robomorphic/" target="_blank">Researcher in Robomorphic Computing Lab</StyledLink></b>
                            </SubTitle> 
                            <Description>Analysis and modeling of time constraints (for physics, robot motion, computation, and sensing) involved in a game of ping-pong played by a robot manipulator arm Analysis.
                            Collaborating with interdisciplinary teams: BU team of 3 and MIT Robotic team to bridge the gap between theoretical research and practical implementation, with the end goal of designing 
                            a general purposed computer system that can do more than one areas of tasks. </Description> 
                            <Description><b>Concepts used: </b>:Python, C, MuJoCo physics simulator, quantitative physics</Description>
                            </Wrapper2>
                    </Wrapper>
       
               
                    <Wrapper> 
                        <Dates>June 2023 - July 2023</Dates>
                        <Wrapper2>
                            <SubTitle>
                            <b><StyledLink href="https://github.com/binhttran/N-Gram" target="_blank">N-Gram Program</StyledLink></b>
                            </SubTitle>      
                            <Description> Developed a Java-based program to analyze text data, which efficiently inputted a text file and generated a sorted list of n-grams along with their respective frequencies, saving the results in another text file.</Description> 
                            <Description><b>Concepts used:</b> Java, hash map, corner cases, comparable objects, linked hash map, OOP</Description>
                        </Wrapper2>
                    </Wrapper>

                    <Wrapper>
                        <Dates>May 2023 - June 2023</Dates>
                        <Wrapper2>
                            <SubTitle>
                            <b><StyledLink href="https://github.com/binhttran/OpenAI-Dictionary" target="_blank">OpenAI Dictionary Program</StyledLink></b>
                            </SubTitle> 
                            <Description> Designed and implemented a Python-based program that ingested a text file containing vocabularies and leveraged the OpenAI API to generate a well-structured HTML file containing definitions for each vocabulary term</Description> 
                            <Description><b>Concepts used: </b>Python, OpenAI API, prompt engineering, HTML, CSS, OOP, parsing, sorting algorithmns</Description>
                        </Wrapper2>
                    </Wrapper>
        </Container>
        
    )
}
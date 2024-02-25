
import styled from 'styled-components';


const SectionTitle = styled.h3`
    color: #ADBC9F;
    margin-left: 40px;

`;
const SubTitle = styled.h3`
    color: #ADBC9F;
    max-width: 70%;
    margin-left: 17%;
    flex: 1;
    list-style: none;

`;

const EachSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    &group-hover:
    shadow-lg;
`;


const Description = styled.li`
    color: #FBFADA;
    margin-left: 37%;
    text-align: justify;
    line-height: 1.5;
    margin-top: 0;
    font-style: italic;
    list-style: none; 
`;

const Dates = styled.p`
    color: #FBFADA;
    max-width: 20%;
    text-align: left;
`
const Container2 = styled.div`
    display: flex;
`;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #436850;
    max-width: 60%;
`;

export default function Projects(){
    return(
        <Container>
                <EachSection>
                    <SectionTitle>Projects</SectionTitle>
                </EachSection>
                <EachSection>
                    <Container2 > 
                        <Dates>September 2023 - December 2023</Dates>
                            <SubTitle>
                            <b><a class="t1" href="https://sites.bu.edu/robomorphic/" target="_blank">Researcher in Robomorphic Computing Lab</a></b>
                            </SubTitle> 
                    </Container2>       
                            <Description>Analysis and modeling of time constraints (for physics, robot motion, computation, and sensing) involved in a game of ping-pong played by a robot manipulator arm Analysis.
                            Collaborating with interdisciplinary teams: BU team of 3 and MIT Robotic team to bridge the gap between theoretical research and practical implementation, with the end goal of designing 
                            a general purposed computer system that can do more than one areas of tasks. </Description> 
                            <Description><b>Concepts used: </b>: machine learning, Python, C, MuJoCo physics simulator, quantitative physics</Description>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>June 2023 - July 2023</Dates>
                            <SubTitle>
                            <b><a class="t1" href="https://github.com/binhttran/N-Gram" target="_blank">N-Gram Program</a></b>
                            </SubTitle> 
                    </Container2>       
                            <Description> Developed a Java-based program to analyze text data, which efficiently inputted a text file and generated a sorted list of n-grams along with their respective frequencies, saving the results in another text file.</Description> 
                            <Description><b>Concepts used: </b>: Java, hash map, corner cases, comparable objects, linked hash map, OOP</Description>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>JMay 2023 - June 2023</Dates>
                            <SubTitle>
                            <b><a class="t1" href="https://github.com/binhttran/OpenAI-Dictionary" target="_blank">OpenAI Dictionary Program</a></b>
                            </SubTitle> 
                    </Container2>       
                            <Description> Designed and implemented a Python-based program that ingested a text file containing vocabularies and leveraged the OpenAI API to generate a well-structured HTML file containing definitions for each vocabulary term</Description> 
                            <Description><b>Concepts used: </b>:Python, OpenAI API, prompt engineering, HTML, CSS, OOP, parsing, sorting algorithmns</Description>
                </EachSection>
        </Container>
        
    )
}
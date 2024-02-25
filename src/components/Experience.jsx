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

`;

const EachSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;


const Position = styled.p`
    color: #FBFADA;
    margin-left: 37%;
    text-align: justify;
    line-height: 1.5;
    margin-top: 0;
    font-style: italic; 
`;

const Description = styled.li`
    color: #FBFADA;
    margin-left: 33%;
    text-align: justify;
    line-height: 1.5;
    margin-top: 0;
    font-style: italic;
    list-style: none; 
`;
const List = styled.ul`
    margin: 10x;

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

export default function Experience(){
    return(
        <Container>
                <EachSection>
                    <SectionTitle>Experience</SectionTitle>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>May 2023 - July 2023</Dates>
                        <SubTitle>Ernest & Young</SubTitle>  
                    </Container2>       
                        <Position>Research Intern on ESG reports</Position>
                        <List>
                            <Description>ESG Benchmarking: Engaged in a 6-week research project regarding ESG benchmarking through analysis of sustainability reports, 10-K with a team of 4 people, and shareholder summary reports.</Description> 
                            <Description>Professionally presented to 30 EY representatives and CLAOC professionals during CEE Student Success Summit.</Description>
                        </List>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>February 2022 - April 2022</Dates>
                        <SubTitle>CodeSpeak Labs</SubTitle>  
                    </Container2>       
                        <Position>Digital Design Intern</Position>
                        <List>
                            <Description>OConceptualized and crafted 20 distinctive variations of the logo for the esteemed Orange County Goes Solar initiative, employing advanced digital design techniques.</Description> 
                            <Description>Actively participated in and showcased expertise in HTML through engaging weekly classes, exemplifying a keen aptitude for design principles.</Description>
                        </List>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>June 2020 - August 2020</Dates>
                        <SubTitle>Ernest & Young</SubTitle>  
                    </Container2>       
                        <Position>Research Intern, Reducing the Digital Divide</Position>
                        <List>
                            <Description>Performed and analyzed research on the inequality in access to technology that was affecting 13.5% of the population in Orange County, CA.</Description> 
                            <Description>Conducted more than 10 interviews with school superintendents inquiring about improvements to virtual learning during the COVID-19 pandemic.</Description>
                        </List>
                </EachSection>
        </Container>
        
    )
}
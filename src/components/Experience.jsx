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
    margin-left: 50px;

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
    padding-top: 19px;


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

const Position = styled.p`
    color: white;
    text-align: center;
    font-style: italic; 

    @media (max-width: 1000px) {
        margin-left: 50px; 
    }
`;


export default function Experience(){
    return(
        <Container id="experience">
                    <SectionTitle>Experience</SectionTitle>
                    <Line/>
                   <Wrapper> 
                        <Dates>May 2023 - July 2023</Dates>
                        <Wrapper2>
                        <SubTitle>Ernest & Young</SubTitle>  
                        <Position>Research Intern on ESG reports</Position>
                            <Description>ESG Benchmarking: Engaged in a 6-week research project regarding ESG benchmarking through analysis of sustainability reports, 10-K with a team of 4 people, and shareholder summary reports.</Description> 
                            <Description>Professionally presented to 30 EY representatives and CLAOC professionals during CEE Student Success Summit.</Description>
                        </Wrapper2>
                    </Wrapper>
                

                    <Wrapper> 
                        <Dates>February 2022 - April 2022</Dates>
                        <Wrapper2>
                        <SubTitle>CodeSpeak Labs</SubTitle>  
                        <Position>Digital Design Intern</Position>
                        
                            <Description>Conceptualized and crafted 20 distinctive variations of the logo for the esteemed Orange County Goes Solar initiative, employing advanced digital design techniques.</Description> 
                            <Description>Actively participated in and showcased expertise in HTML through engaging weekly classes, exemplifying a keen aptitude for design principles.</Description>
                        </Wrapper2>
                    </Wrapper>

                    <Wrapper> 
                        <Dates>June 2020 - August 2020</Dates>
                        <Wrapper2>
                        <SubTitle>Ernest & Young</SubTitle>  
                        <Position>Research Intern, Reducing the Digital Divide</Position>
                            <Description>Performed and analyzed research on the inequality in access to technology that was affecting 13.5% of the population in Orange County, CA.</Description> 
                            <Description>Conducted more than 10 interviews with school superintendents inquiring about improvements to virtual learning during the COVID-19 pandemic.</Description>
                        </Wrapper2>
                    </Wrapper>
           
        </Container>
        
    )
}

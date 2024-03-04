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
    margin-left: 50px;

    @media (max-width: 1000px) {
        text-align: center;
        margin-left: 90px;
    }
`;
const About = styled.p`
    color: white;
    margin: 20px 50px;
    line-height: 1.5;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding-left: 70px;
    }

`;
const EachSection = styled.div`
    margin: auto;
`;
const SubTitle = styled.h3`
    color: #ADBC9F;
    text-align: center; 
`;
const Description = styled.p`
    color: #FBFADA;
    line-height: 1.5;
    margin-top: 0;
    max-width: 600px; /* Set maximum width */
    margin-left: auto; /* Align description to right */
    margin-right: auto; /* Align description to left */
   
    @media (max-width: 1000px) {
        margin-left: 50px; 
    
`;
const Dates = styled.p`
    color: #FBFADA;
    text-align: center;
    margin-left: 50px;

    @media (max-width: 1000px) {
        margin: 20px auto;
    }
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
`;

const Detail = styled.p`
    color: white;
    text-align: center;
    font-style: italic; 

    @media (max-width: 1000px) {
        margin: 20px auto;
    }
`;

export default function AboutMe(){
    return(
        <Container id='about'>
            <EachSection>
                <SectionTitle>About</SectionTitle>
                <Line/>

                    <About>
                        Hi, my name is Binh Tran I am a second year student at Boston University studying computer science. I am excited to further explore my studies and find a concentration that I am passionate about. I am an aspiring software engineer, who is looking to gain experience through a technological internship.
                        Welcome to my website! Feel free to read more about me and my experience.
                    </About>
            </EachSection>

            <Wrapper>
                <Dates>Sept 2022 - May 2026</Dates>
                <Wrapper2>
                    <SubTitle>Boston University</SubTitle>
                    <Detail>Bachelor in Computer Science</Detail>
                    <Description><b>Achievements: </b>Dean's list, University’s Scholarship Recipient</Description>
                    <Description><b>Courses:</b> CS111, CS112, CS131, CS132, CS210, CS237, CS330, CS391, CS411, CS491</Description>
                </Wrapper2>
            </Wrapper>

            <Wrapper>
                <Dates>August 2018 - May 2022</Dates>
                <Wrapper2>
                    <SubTitle>Garden Grove High School</SubTitle>
                    <Detail>High School Diploma</Detail>
                    <Description><b>Achievements: </b>Questbridge National Finalist, Simon Scholar Receiver of $16k, AP Scholar with Distinction</Description> 
                    <Description><b>Extracurriculars:</b> Publicist of Make-A-Wish and Kiwin's, Tennis Team co-captain, 100+ hours volunteering</Description>
                </Wrapper2>
            </Wrapper>
        </Container>
        
    )
}


import styled from 'styled-components';


const SectionTitle = styled.h3`
    color: #ADBC9F;
    margin-left: 50px;

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

const About = styled.p`
    color: white;
    margin: 20px 50px;
    line-height: 1.5;

`;

const Description = styled.p`
    color: #FBFADA;
    margin-left: 37%;
    text-align: justify;
    line-height: 1.5;
    margin-top: 0;


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

export default function AboutMe(){
    return(
        <Container>
                <EachSection>
                    <SectionTitle>About</SectionTitle>
                           <About>Hi, my name is Binh Tran I am a second year student at Boston University studying computer science. I am excited to further explore my studies and find a concentration that I am passionate about. I am an aspiring software engineer, who is looking to gain experience through a technological internship.
                            Welcome to my website! Feel free to read more about me and my experience.</About>
                </EachSection>
                <EachSection>
                    <Container2> 
                        <Dates>September 2018 - Present</Dates>
                        <SubTitle>Boston University</SubTitle>  
                    </Container2>       
                        <Description>Bachelor of Arts, BA in Computer Science</Description>
                        <Description><b>Courses: </b>CS111, CS112, CS131, CS132, CS210, CS237, CS391, CS330, CS411, CS491</Description>
                </EachSection>
                <EachSection>
                    <Container2>
                        <Dates>August 2018 - May 2022</Dates>
                        <SubTitle>Garden Grove High School</SubTitle>
                    </Container2>
                            <Description>High School Diploma</Description>
                            <Description><b>Achievements: </b>Questbrigdge National Finalist, Simon Scholar Receiver of $16k, AP Scholar with Distinction</Description> 
                            <Description><b>Extracurriculars:</b>Publicist of Make-A-Wish and Kiwin's, Tennis Team co-captain, 100+ hours volunteering</Description>
                </EachSection>
        </Container>
        
    )
}
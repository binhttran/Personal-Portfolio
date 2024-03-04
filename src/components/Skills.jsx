import styled from 'styled-components';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #436850;
    padding-right: 70px;

    @media (max-width: 1000px){
        margin: 0px; 
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`; 


const Category = styled.h3`
    color: #FBFADA;
    margin-left: 50px;
`;

const Word = styled.p`
    color: #FBFADA;
    line-height: 1.5;
    text-align: right;



    @media (max-width: 1000px) {
        margin: auto; 
        padding-left: 50px;
    }
`;

export default function Skills(){
    return(
        <Container id="skills">
            <SectionTitle>
                Skills
            </SectionTitle>
            <Line/>
            <Wrapper>
                <Category>Comfortable</Category>
                <Word>Java, Python, HTML/CSS, Latex, Git</Word>
            </Wrapper>
            <Wrapper>
                <Category>Familiar</Category>
                <Word>ReactJS, JavaScript, Assembly, C</Word>
            </Wrapper>
            <Wrapper>
                <Category>Learning</Category>
                <Word>NextJS, FireBase, MongoDB, ExpressJS</Word>
            </Wrapper>

        </Container>
    );
}

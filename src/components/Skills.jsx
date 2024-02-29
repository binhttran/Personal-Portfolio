import styled from 'styled-components';

const word = styled.p`
    color: #FBFADA;
`;
const Div = styled.div`
    background-color: #436850;
`;
const catagory = styled.h3`
    color: white;
`;
export default function Skills(){
    return(
        <Div>
            <div>
                <catagory>Comfortable</catagory>
                <word>Java, Python, HTML/CSS, Latex</word>
            </div>
            <div>
                <catagory>Familiar</catagory>
                <word>ReactJS, JavaScript, Git</word>
            </div>
        </Div>
       
    )

}
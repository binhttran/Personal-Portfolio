import styled from 'styled-components';

const word = styled.p`
    color: white;
`;
const Div = styled.div`
    color: white;
`;
export default function Skills(){
    return(
        <div>
            <Div>
                <h3>Comfortable</h3>
                <word>Java, Python, HTML/CSS, ReactJS, Latex</word>
            </Div>
            <Div>
                <h3>Familiar</h3>
                <word>React, JavaScript, Git</word>
            </Div>
        </div>
       
    )

}
import styled from 'styled-components';

const Name = styled.h1`
    color: #436850;
    text-align: center;

`;

const Description =styled.h3`
    color: white;
    text-align: center;
`;

const Div = styled.div`
    background-color: #D7E4C0;
    display: flex;
    flex-direction: column; 
    max-width: 40%; 
    height: 100vh; 
    justify-content: center;
    align-items: center;
`;

const List = styled.li`
    color: #436850;
    list-style: none; 
    padding: 5px;
    margin-right: 50px;

    
`;
const ListUl = styled.ul`
    text-align: center;
`;


export default function Header(){
    return(
        <Div>
            <Name>Binh Tran</Name>
            <Description> CS student at Boston University</Description>
            <nav>
                <ListUl>
                    <List>About</List>
                    <List>Projects</List>
                    <List>Experience</List>
                </ListUl>
            </nav>
        </Div>
       
    )
}
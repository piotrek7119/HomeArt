import styled from 'styled-components';

import ListMore from "./ListMore";

const Container = styled.section`

    width: 100%;
    margin: 50px 0 50px 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const InnerDiv = styled.div`
justify-items: center;
width: 100%;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
        }


`;


const List = ({items}) => {
    return(
        <Container>
            <InnerDiv>
            {
            items.map(item => {
                return(
                    <ListMore items={item}/>
                )
            })
        }
        </InnerDiv>
        </Container>
        
    )
    
}

export default List;
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

const List = ({items}) => {
    return(
        <Container>
            {
            items.map(item => {
                return(
                    <ListMore items={item}/>
                )
            })
        }
        </Container>
        
    )
    
}

export default List;
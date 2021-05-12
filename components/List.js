import styled from 'styled-components';

import PortfolioList from "../components/PortfolioList";

const Container = styled.section`

    width: 100%;
    padding: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

`;

const InnerDiv = styled.div`
justify-items: center;
width: 100%;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px 10px;


    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        }


`;



const List = ({items}) => {
    return(
        <Container>
            <InnerDiv>
            {
            items.map(item => {
                return(
                    <PortfolioList items={item} key={item.id}/>
                )
            })
        }
        </InnerDiv>
        </Container>
        
    )
    
}

export default List;
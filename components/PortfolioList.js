import React from 'react';
import  styled from 'styled-components';
import Image from 'next/image';



const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin: 15px;
    }

`;

const PortfolioList = ({items}) => {

        return (   
            <Container key={items.id}>
                <h2>
                    {items.name}
                </h2>
                <p>
                    {items.description}
                </p>
                <Image
                    src={items.image}
                    layout='intrinsic'
                    width={4032}
                    height={2268}
                />
            </Container>
        )
}

export default PortfolioList;
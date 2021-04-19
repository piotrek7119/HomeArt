import React from 'react';
import  styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';



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

const ButtonStyled = styled.button`


width: 130px;
height: 40px;

margin: 10px 0 0 0;

background: #222121;
border: none;
border-radius: 25px;

color: #ffffff;
font-weight: 900;
cursor: pointer;

`;

const PortfolioList = ({items}) => {


        return (   
            <Container>
                
                <Image
                    src={items}
                    layout='intrinsic'
                    width={4032}
                    height={2268}
                />
               
            </Container>
        )
}

export default PortfolioList;
import React from 'react';
import  styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';



const Container = styled.section`

    width: 100%;
    margin: 10px;
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
const ImageStyled = styled(Image)`
position: relative;
width: 100%;
height: 100vh;
object-fit: cover;
object-position: 0;

`;


const PortfolioList = ({items}) => {


        return (   
            <Container>
                
                <ImageStyled
                    src={items}
                    layout='intrinsic'
                    width={400}
                    height={300}
                    sizes='(max-width: 600px) 100vw, (max-width: 1023px) 38vw, 23vw'
                />
               
            </Container>
        )
}

export default PortfolioList;
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Counter from './couter';

const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        margin: 15px;
    }

    a {
        align-self: center;
        margin: 20px;
    }
`;



const ButtonStyled = styled.button`

width: 150px;
height: 40px;

background: #222121;
border: none;
border-radius: 25px;

color: #ffffff;
font-weight: 900;
cursor: pointer;

`;

const data = [
    {
        id: '0',
        label: "lat w branży",
        number: "5",
        duration: 1
    },
    {
        id: '1',
        label: "% zadowolonych klientów",
        number: "99",
        duration: 2
    },
    {
        id: '2',
        label: "wykonanych realizacji",
        number: "50",
        duration: 1
    },    
  ]
  
  


const Realisation = () => {



    return (
        <Container id='realisation'>
            <Counter counter={data}/>
            
            <Link href="portfolio">
            <a>
                <ButtonStyled>
                    Zobacz realizacje
                </ButtonStyled>
            </a>
            </Link>
        </Container>
    )
}

export default Realisation;
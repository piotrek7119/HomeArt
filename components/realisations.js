import Link from 'next/link';
import React from 'react';
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

`;



const data = [
    {
        id: '0',
        label: "wykonanych gładzi",
        number: "4108",
        duration: 3
    },
    {
        id: '1',
        label: "pomalowanych ścian",
        number: "6893",
        duration: 3
    },
    {
        id: '2',
        label: "wykonanych realizacji",
        number: "28",
        duration: 3
    },
    {
        id: '3',
        label: "lata w branży",
        number: "3",
        duration: 3
    },    
  ]
  
  

const Realisation = () => {



    return (
        <Container id='realisation'>
            <Counter counter={data}/>
        </Container>
    )
}

export default Realisation;
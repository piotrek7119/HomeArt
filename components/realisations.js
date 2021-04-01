import React from 'react';
import styled from 'styled-components';

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

const Realisation = () => {
    return (
        <Container id='realisation'>
            <h2>
                x wykonanych realizacji
            </h2>
            <h2>
                x% zadowolonych klientów
            </h2>
            <h2>
                x lat w branży
            </h2>
        </Container>
    )
}

export default Realisation;
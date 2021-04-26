import React from "react";
import styled from "styled-components";
import Image from "next/image";


const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    div {

        width: 100%;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            
        p {
            margin: 0 15px 20px 15px;
        }
        
        ul {
            align-self: flex-start;
        }
    }
    
`;

const Offer = () => {
    return (
        <Container id='offer'>
            <div>
                <h2>
                    OFERTA
                </h2>
                <p>
                Oferujemy pelen zakres prac w dziedzinie wykanczania wnetrz m.in:
                </p>
                <ul>
                    <li>
                    ukladanie glazury
                    </li>
                    <li>
                    gladzie gipsowe
                    </li>
                    <li>
                    tapetowanie
                    </li>
                    <li>
                    malowanie
                    </li>
                    <li>
                    sucha zabudowa
                    </li>
                    <li>
                    ukladanie paneli
                    </li>
                    <li>
                    instalacje wod-kan
                    </li>
                    <li>
                    instalacje elektryczne
                    </li>
                </ul>
            </div>
            <div>
                <Image
                    src='/Oferta.jpeg'
                    layout='responsive'
                    width={300}
                    height={250}
                />
            </div>
            
        </Container>
    )
}

export default Offer;
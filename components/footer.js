import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.footer`
    width: 100%;

    background: #b0b0b0;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: flex-end;

`;

const ContactInfoStyled = styled.div`

width: 50%;
margin: 15px;
display: flex;
flex-direction: column;
align-items: flex-start;

a {
    margin-bottom: 10px;
    color: #ffffff;
}

h2 {
    color: #ffffff;
}

`

const ImageOuterStyled = styled.div`

width: 50%;
margin: 15px 0 15px 15px;
`



const Footer = () => {
    return (
        <Container>
            <ContactInfoStyled>
                <h2>KONTAKT</h2>
                <i></i>
                <a href='tel:+48 506 251 009'>+48 506 251 009</a>
                <i></i>
                <a href='email:biurp@home-art.pl'>biuro@home-art.pl</a>
            </ContactInfoStyled>
            <ImageOuterStyled>
                <Image
                    src='/HOMEART white.png'
                    layout='fixed'
                    width={110}
                    height={100}
                />
            </ImageOuterStyled>
            
        </Container>
    )
}

export default Footer;
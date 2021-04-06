import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.footer`
    width: 100%;
    margin: 0;
    background: #b2b2b2;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     section {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
     }

`;

const ContactInfoStyled = styled.div`

width: 50%;
margin: 15px;
display: flex;
flex-direction: column;
align-items: flex-start;

a {
    color: #ffffff;
    margin: 7px 5px 0 0;
}

h2 {
    margin: 20px 5px 0 0;
    font-size: 18px;
    color: #ffffff;
}

`

const ImageOuterStyled = styled.div`

width: 50%;
margin: 15px 0 15px 15px;
`

const InnerDiv = styled.div`

width: 100%;
margin: 0;
background: #222121;
z-index: 99;
color: white;

p {
    margin: 3px;
    font-size: 10px;
    text-decoration: none;
    color: #ffffff;
}
`;



const Footer = () => {
    return (
        <Container id='contact'>
            <section>
            <ContactInfoStyled>
                <Image
                    src='/HOMEART text.png'
                    layout='fixed'
                    width={150}
                    height={30}
                />
                <h2>KONTAKT</h2>
                <a href='tel:+48 506 251 009'>+48 506 251 009</a>
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
            </section>
            <InnerDiv>
                <p>HomeArt Szymon Pawliński</p>
                <p>NIP: 6342981352</p>
                <p>REGON: 387020793</p>
            </InnerDiv>
            
        </Container>
    )
}

export default Footer;
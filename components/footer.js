import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.footer`
    width: 100%;
    padding: 0;
    margin: 0;
    background: #b2b2b2;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     section {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
     }

`;

const ContactInfoStyled = styled.div`

width: 60%;
margin: 15px;
display: flex;
flex-direction: column;
align-items: flex-start;

a {
    color: #ffffff;
    margin: 7px 5px 0 0;
    font-size: 18px;
    text-decoration: none;
}

h2 {
    margin: 20px 0 0 0;
    font-size: 20px;
    color: #ffffff;
    
}


ul {
    list-style:none;
    padding: 0;
}

@media (min-width: 1024px) {
    h2 {
        font-size: 50px;
    }
}

`

const ImageOuterStyled = styled.div`
width: 40%;
margin: 15px 15px 15px 0;

@media (min-width: 1024px) {
    margin: 30px 15px 30px 0;
}
`

const InnerDiv = styled.div`

width: 100%;
margin: 0;
background: #222121;
z-index: 99;
text-decoration: none;

`;

const Paragraph = styled.p`

    margin: 5px 0 0 15px;
    font-size: 11px;
    text-decoration: none;
    color: #ffffff;

    @media (min-width: 1024px) {
        font-size: 20px;
    }


`;

const PhoneContactStyled = styled.li`
    height: 20px;
    background: url('../../phone.svg') no-repeat left center;
    padding-left: 30px;
    margin-bottom: 5px;

    @media (min-width: 1024px) {
        height: 40px;
        padding-left: 50px;
        margin-bottom: 5px;

        a {
            font-size: 30px;
        }
    }

`;

const MailStyled = styled.li`
    height: 20px;
    background: url('../../mail.svg') no-repeat left center;
    padding-left: 30px;

    @media (min-width: 1024px) {
        height: 40px;
        padding-left: 50px;
        margin-bottom: 5px;

        a {
            font-size: 30px;
        }
    }
`;


const Footer = () => {
    return (
        <Container id='contact'>
            <section>
            <ContactInfoStyled>
                <Image
                    src='/HOMEART text.png'
                    layout='intrinsic'
                    width={400}
                    height={80}
                />
                <h2>KONTAKT</h2>
                <ul>
                    <PhoneContactStyled>
                        <a href='tel:+48 506 251 009'>+48 506 251 009</a>
                    </PhoneContactStyled>
                    <MailStyled>
                        <a href='emailto:biuro@home-art.org'>biuro@home-art.org</a>
                    </MailStyled>
                </ul>
            </ContactInfoStyled>
            <ImageOuterStyled>
                <Image
                    src='/HOMEART white.png'
                    layout='intrinsic'
                    width={300}
                    height={300}
                />
            </ImageOuterStyled>
            </section>
            <InnerDiv>
                <Paragraph>HomeArt Szymon Pawli??ski</Paragraph>
                <Paragraph>NIP: 6342981352</Paragraph>
                <Paragraph>REGON: 387020793</Paragraph>
            </InnerDiv>
        </Container>
    )
}

export default Footer;
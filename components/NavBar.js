import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.section`

    position: fixed;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background: ${props => props.color ? `#ffffff` : `#222121`};
    

    transform: ${props => props.animation ? `translateY(0)` : `translateX(100%) translateY(-100%)`};
    transition: all 0.4s ease-in-out;

`;

const AnchorStyled = styled.a`

color: ${props => props.color ? `#222121` : `#ffffff`};
font-size: 40px;
margin: 5px 0 10px 20px;
cursor: pointer;
text-align: center;

`;

const NavBar = ({isVisible, visibility, color}) => {

    return (
        <Container visible={isVisible} animation={isVisible} color={color}>
            <Link href='/#home'>
                <AnchorStyled onClick={visibility} color={color}>
                    STRONA <br/> GŁÓWNA
                </AnchorStyled>
            </Link>
            <Link href='/#about'>
                <AnchorStyled onClick={visibility} color={color}>
                    O NAS
                </AnchorStyled>
            </Link>
            <Link href='/#offer'>
                <AnchorStyled onClick={visibility} color={color}>
                    OFERTA
                </AnchorStyled>
            </Link>
            <Link href='/portfolio'>
                <AnchorStyled onClick={visibility} color={color}>
                    REALIZACJE
                </AnchorStyled>
            </Link>
            <Link href='/#contact'>
                <AnchorStyled onClick={visibility} color={color}>
                    KONTAKT
                </AnchorStyled>
            </Link>
        </Container>
    )
}
export default NavBar;
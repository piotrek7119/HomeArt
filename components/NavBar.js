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
    z-index: 999;
    background: #222121;
    

    transform: ${props => props.animation ? `translateY(0)` : `translateX(100%) translateY(-100%)`};
    transition: all 0.4s ease-in-out;

`;

const AnchorStyled = styled.a`

color: #ffffff;
font-size: 40px;
margin: 5px 0 10px 20px;
cursor: pointer;

`;

const NavBar = ({isVisible, visibility}) => {

    return (
        <Container visible={isVisible} animation={isVisible}>
            <Link href='#home'>
                <AnchorStyled onClick={visibility}>
                    HOME
                </AnchorStyled>
            </Link>
            <Link href='#about'>
                <AnchorStyled onClick={visibility}>
                    O NAS
                </AnchorStyled>
            </Link>
            <Link href='#offer'>
                <AnchorStyled onClick={visibility}>
                    OFERTA
                </AnchorStyled>
            </Link>
            <Link href='#realisation'>
                <AnchorStyled onClick={visibility}>
                    REALIZACJA
                </AnchorStyled>
            </Link>
            <Link href='#contact'>
                <AnchorStyled onClick={visibility}>
                    KONTAKT
                </AnchorStyled>
            </Link>
        </Container>
    )
}
export default NavBar;
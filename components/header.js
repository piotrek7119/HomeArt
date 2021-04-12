import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.header`
    position: fixed;
    z-index: 99999;
    padding: 15px 0 15px 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.color ? `#ffffff` : `transparent`};
    
    
`



const HamburgerButtonStyled = styled.button`
position: relative;
width: 50px;
height: 55px;
background: transparent;
border: none;
  outline: none;
  padding: 0;
  margin: 0;
  
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  
`;

const HamburgerSpanFirst = styled.span`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 40%;
    
    width: 35px;
    height: 3px;
    background: ${props => props.color ? `#222121` : `#ffffff`};
    border-radius: 25px;

    transform: ${props => props.animation ? `translateY(200%) rotate(225deg)` : `translateY(0)`};
    transition: all 0.3s ease-in-out;
`;

const HamburgerSpanSecond = styled.span`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 60%;
    
    width: 35px;
    height: 3px;
    background: ${props => props.color ? `#222121` : `#ffffff`};
    border-radius: 25px;

    transform: ${props => props.animation ? `translateY(-160%) rotate(315deg)` : `translateY(0)`};
    transition: all 0.3s ease-in-out;
`

const Header = ({isVisible, visibility, color}) => {
    return (
        <Container color={color}>
                <Link href="/">
                    <a>
                        <Image
                        src={color ? '/HOMEART bok.png' : '/HOMEART biel bok.png'}
                        layout='fixed'
                        width={150}
                        height={50}
                        />
                    </a>
                </Link>
                <HamburgerButtonStyled onClick={isVisible}>
                    <HamburgerSpanFirst color={color} animation={visibility} />
                    <HamburgerSpanSecond color={color} animation={visibility}/>
                </HamburgerButtonStyled>
        </Container>
    )
}

export default Header;
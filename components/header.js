import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.header`
    position: fixed;
    z-index: 9999;
    margin-top: 15px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
  z-index: 999999;
  
`;

const HamburgerSpanFirst = styled.span`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 45%;
    
    width: 35px;
    height: 3px;
    background: #ffffff;
    border-radius: 25px;
`;


const HamburgerSpanSecond = styled.span`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 60%;
    
    width: 35px;
    height: 3px;
    background: #ffffff;
    border-radius: 25px;
`

const Header = () => {
    return (
        <Container>
                <Image
                    src='/HOMEART biel bok.png'
                    layout='fixed'
                    width={200}
                    height={60}
                />
                <HamburgerButtonStyled>
                    <HamburgerSpanFirst/>
                    <HamburgerSpanSecond/>
                </HamburgerButtonStyled>
        </Container>
    )
}

export default Header;
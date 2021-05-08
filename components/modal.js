import React from 'react';
import styled from 'styled-components';


const Container = styled.section`

    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    display: ${props => props.visibility ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, .7);
`;

const ImageStyled = styled.img`

width: 80%;
height: auto;


`;

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
    top: 50%;
    
    width: 35px;
    height: 3px;
    background: #ffffff;
    border-radius: 25px;
    transform: rotate(45deg)
`;

const HamburgerSpanSecond = styled.span`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 50%;
    
    width: 35px;
    height: 3px;
    background: #ffffff;
    border-radius: 25px;

    transform: rotate(-45deg);
`


const Modal = ({visible, setVisibility, item}) => {
    return (
        <Container visibility={visible} onClick={setVisibility}>
            <ImageStyled src={`../..${item}`}/>

            <HamburgerButtonStyled onClick={setVisibility}>
                    <HamburgerSpanFirst/>
                    <HamburgerSpanSecond/>
                </HamburgerButtonStyled>
        </Container>
    )
}
export default Modal;


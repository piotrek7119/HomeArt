import React from "react";
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  position: relative;
    width: 100%;
    height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    background: rgba(0, 0, 0, .1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  };

  h1 {
      position: absolute;
      width: 80%;
      margin: 0;
       z-index: 2;
       top: 30%;
       color: #ffffff;
       font-size: 35px;
       text-align: center;
       text-transform: uppercase;

       @media(min-width: 1024px){
           font-size:50px;
       }

    }
`;

const ImageStyled = styled(Image)`
width: 100%;
height: 100vh;
object-fit: cover;
object-position: 20%;

`;



const Hero = ({children, image}) => {
    return (
        <Container id='home'>
            {image.length > 0 && (
            <ImageStyled
                src={image}
                layout='fill'
                quality={100}
            />
            )}
            <h1>
                {children}
            </h1>
        </Container>
    )
}

export default Hero;
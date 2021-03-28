import React from "react";
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  position: relative;
    width: 100%;
    height: 100vh;
  margin: 0;
  padding: 0;
  
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
      margin: 20px;
       z-index: 2;
       color: #ffffff;
       font-size: 35px;
       text-align: center;
    }
`;



const Hero = () => {
    return (
        <Container>
            <Image
                src='/HeroImage.jpg'
                layout='fill'
            />
            <h1>
                Profesjonalne wykoczenia wnętrz
            </h1>
        </Container>
    )
}

export default Hero;
import React, {useState} from 'react';
import  styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './modal';



const Container = styled.section`

    width: 80%;
    margin: 20px;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin: 15px;
    }

`;
const ImageStyled = styled(Image)`
position: relative;
width: 100%;
height: 100vh;
object-fit: cover;
object-position: 0;

`;


const PortfolioList = ({items}) => {

    
    const [isVisible, setIsVisible] = useState(false);
    
   const handleClick = () => {
    if(!isVisible) {
      setIsVisible(true)
      console.log(isVisible)
    } else {
      setIsVisible(!isVisible)
      console.log(isVisible)
     }
  }
        return (
            <Container>
                <ImageStyled
                    src={items}
                    layout='intrinsic'
                    width={400}
                    height={300}
                    sizes='(max-width: 600px) 100vw, (max-width: 1023px) 38vw, 23vw'
                    onClick={handleClick}
                />
                <Modal item={items} visible={isVisible} setVisibility={handleClick}/>
            </Container>
        )
}

export default PortfolioList;
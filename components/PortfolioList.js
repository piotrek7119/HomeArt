import React, {useContext} from 'react';
import  styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { IdContext } from '../context/idContext';



const Container = styled.section`

    width: 100%;
    margin: 0;
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

const ButtonStyled = styled.button`


width: 150px;
height: 30px;

margin: 10px 0 0 0;

background: #222121;
border: none;
border-radius: 25px;

color: #ffffff;
font-weight: 900;
font-size: 12px;
cursor: pointer;

`;

const PortfolioList = ({items}) => {

        const {setIsIdNumber} = useContext(IdContext)

        const handleClick = () => {
            const id = items.id
            setIsIdNumber(id)
        }
        
        return (   
            <Container key={items.id}>
                <h2>
                    {items.name}
                </h2>
                <p>
                    {items.description}
                </p>
                <Image
                    src={items.image}
                    layout='intrinsic'
                    width={400}
                    height={320}
                />
                <Link href={`portfolio/${items.id}`}>
                    <a  onClick={handleClick}>
                        <ButtonStyled>
                            Zobacz więcej z {items.name}
                        </ButtonStyled>
                    </a>
                </Link>
            </Container>
        )
}

export default PortfolioList;
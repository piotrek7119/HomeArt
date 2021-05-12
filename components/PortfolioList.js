import React, {useContext} from 'react';
import  styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { IdContext } from '../context/idContext';



const Container = styled.section`
    overflow: hidden;
    width: 80%;
    margin: 0 0 10px 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubjectStyled = styled.h2`

position: relative;

&::before {
    content: '';
    position: absolute;
    right: 110%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;

}


&::after {
    content: '';
    position: absolute;
    left: 110%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;
}

@media (min-width: 1024px) {
font-size: 30px;
}

`;

const PortfolioList = ({items}) => {

        const {setIsIdNumber} = useContext(IdContext)

        const handleClick = () => {
            const id = items.id
            setIsIdNumber(id)
        }
        
        return (   
            <Container key={items.id}>
                <SubjectStyled>
                    {items.name}
                </SubjectStyled>
                <Link href={`portfolio/${items.id}`}>
                    <a  onClick={handleClick}>
                    <Image
                        src={items.image}
                        layout='intrinsic'
                        width={600}
                        height={600}
                    />
                    </a>
                </Link>
            </Container>
        )
}

export default PortfolioList;
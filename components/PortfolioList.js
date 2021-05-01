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
                <Link href={`portfolio/${items.id}`}>
                    <a  onClick={handleClick}>
                    <Image
                        src={items.image}
                        layout='intrinsic'
                        width={400}
                        height={320}
                    />
                    </a>
                </Link>
            </Container>
        )
}

export default PortfolioList;
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Image from "next/image";


const Container = styled.section`
scroll-margin-top: 80px;

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {

        width: 90%;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            margin: 0 15px 20px 15px;
            text-align: center;
        }
    }
`;

const InnerDiv = styled.section`


            width: 100%;
            margin: 15px;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        p {
            margin: 0 15px 20px 15px;
            text-align: center;
        }

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-around;
        }
    

`

const UnorderedListStyled = styled.ul`

    align-self: flex-start;
    list-style:none;
    transform: ${props => props.animation ? `translateX(0)` : `translateX(-200%)`};
    transition: all 0.5s ease-out;
`;

const ListStyled = styled.li`
    height: 26px;
    background: url('arrow-right-o.svg') no-repeat left center;
    padding-left: 30px;
    padding-top: 5px;
    margin: 5px 0;
    
`;

const SubjectStyled = styled.h2`

position: relative;

&::before {
    content: '';
    position: absolute;
    right: 120%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;

}


&::after {
    content: '';
    position: absolute;
    left: 120%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;
}

`;

const Offer = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const helper = window.scrollY + document.querySelector('#offer').getBoundingClientRect().top 

        window.addEventListener('scroll', () => {
            let LazyStarter = window.scrollY + 400;
                if(LazyStarter >= helper) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false)
                }
        })
    });

    return (
        <Container id='offer'>
           
                <InnerDiv>
            <div>
            <SubjectStyled>
                    OFERTA
                </SubjectStyled>
                <p>
                Oferujemy pelen zakres prac w dziedzinie wykanczania wnetrz m.in:
                </p>
                <UnorderedListStyled  animation={isVisible}>
                    <ListStyled>
                    ukladanie glazury
                    </ListStyled>
                    <ListStyled>
                    gladzie gipsowe
                    </ListStyled>
                    <ListStyled>
                    tapetowanie
                    </ListStyled>
                    <ListStyled>
                    malowanie
                    </ListStyled>
                    <ListStyled>
                    sucha zabudowa
                    </ListStyled>
                    <ListStyled>
                    ukladanie paneli
                    </ListStyled>
                    <ListStyled>
                    instalacje wod-kan
                    </ListStyled>
                    <ListStyled>
                    instalacje elektryczne
                    </ListStyled>
                </UnorderedListStyled>
            </div>
            <div>
                <Image
                    src='/Oferta.jpeg'
                    layout='intrinsic'
                    width={600}
                    height={700}
                />
            </div>
            </InnerDiv>
        </Container>
    )
}

export default Offer;
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../layout/layout";
import List from "../components/List";
import Hero from "../components/heroImage";

const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;

    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const InnerDiv = styled.div`

    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 999;

    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`;

const ButtonStyled = styled.button`

width: 250px;
height: 35px;

background: #222121;
border: none;
border-radius: 25px;

color: #ffffff;
font-weight: 900;
cursor: pointer;

`;

const items = [
    {
        id: 0,
        name: 'Mariacka 1',
        image: '/Mariacka 1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra diam at lectus pellentesque congue. Nam vel odio quis odio eleifend mollis. Maecenas condimentum, nibh sed consectetur tempus, justo nunc aliquam sapien, ut suscipit mauris nisl at mi. In ultrices cursus fermentum. ',
    },
    {
        id: 1,
        name: 'Ruda 1',
        image: '/Ruda 1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra diam at lectus pellentesque congue. Nam vel odio quis odio eleifend mollis. Maecenas condimentum, nibh sed consectetur tempus, justo nunc aliquam sapien, ut suscipit mauris nisl at mi. In ultrices cursus fermentum. ',
    },
]

const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Hero>Portfolio</Hero>
                <List items={items}/>
                <InnerDiv>
                    <Link href="/">
                    <a>
                        <ButtonStyled>
                            Wróć do strony głównej
                        </ButtonStyled>
                    </a>
                </Link>
                </InnerDiv>
            </Container>
        </Layout>
    )
}

export default Portfolio;
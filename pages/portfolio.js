import React from "react";
import styled from "styled-components";

import Layout from "../layout/layout";
import List from "../components/List";
import Hero from "../components/heroImage";

import {allItems} from "../data/data";

const Container = styled.section`

    width: 100%;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`;



const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Hero image='/HeroImage.jpg'>NASZE REALIZACJE</Hero>
                <List items={allItems}/>
            </Container>
        </Layout>
    )
}

export default Portfolio;
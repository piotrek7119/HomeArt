import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../layout/layout";
import List from "../components/List";
import Hero from "../components/heroImage";

import {allItems} from "../data/data";

const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;

    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Hero>NASZE REALIZACJE</Hero>
                <List items={allItems}/>
            </Container>
        </Layout>
    )
}

export default Portfolio;
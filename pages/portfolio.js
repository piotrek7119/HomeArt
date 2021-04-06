import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../layout/layout";


const Container = styled.section`

    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Portfolio = () => {
    return (
        <Layout>
            <Container>
                <Link href="/">
                <a>
                    <button>
                        back
                    </button>
                </a>
                </Link>
            </Container>
        </Layout>
    )
}

export default Portfolio;
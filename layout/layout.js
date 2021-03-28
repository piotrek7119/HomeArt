import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Head from 'next/head';


import Header from '../components/header';
import Footer from '../components/footer';


const GlobalStyle = createGlobalStyle`

body {
    box-sizing: border-box;
    background: #b0b0b0;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`


const Layout = ({children}) => {
    return (
        <section>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/> 
            </Head>
            <GlobalStyle/>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}

export default Layout;
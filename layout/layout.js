import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import Head from 'next/head';


import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/NavBar';


const GlobalStyle = createGlobalStyle`

body {
    width: 100%;
    box-sizing: border-box;
    background: #b0b0b0;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`


const Layout = ({children}) => {

        const [isVisible, setIsVisible] = useState(false);
        const [isColor, setIsColor] = useState(false);

    const handleClick = () => {
        if(!isVisible) {
            setIsVisible(!isVisible);
        } else {
            setIsVisible(!isVisible);
        }
    }

    useEffect(() => {
        const helper = 650;

        window.addEventListener('scroll', () => {
            let LazyStarter = window.scrollY + 100;
                if(LazyStarter >= helper) {
                    setIsColor(true);
                } else {
                    setIsColor(false)
                }
        })
    });



    return (
        <section>
            <Head>
                <title>HomeArt</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/> 
            </Head>
            <GlobalStyle/>
            <Header visibility={isVisible} isVisible={handleClick} color={isColor}/>
            <NavBar isVisible={isVisible} visibility={handleClick} color={isColor}/>
            {children}
            <Footer/>
        </section>
    )
}

export default Layout;
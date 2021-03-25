import React from 'react';
import Header from '../components/header';


const Footer = (children) => {
    return (
        <section>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}

export default Footer;
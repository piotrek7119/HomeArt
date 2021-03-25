import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


const Layout = ({children}) => {
    return (
        <section>
            <Header/>
            {children}
            <Footer/>
        </section>
    )
}

export default Layout;
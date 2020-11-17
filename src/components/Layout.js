import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import Sponsers from './Sponsers'
const Layout = ({children}) => {
    return (
        <div>
           <Navigation/>
            {children}
            <Sponsers/>
           <Footer/> 
        </div>
    )
}

export default Layout

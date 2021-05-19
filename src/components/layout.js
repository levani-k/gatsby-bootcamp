import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'


const Layout = ({ children }) => {

    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout
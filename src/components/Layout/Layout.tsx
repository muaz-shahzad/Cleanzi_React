import React from 'react'
import Footer from './Footer';
import Header from './Header';
import PreLoader from './PreLoader';

interface Props{
    children:any
}

const Layout:React.FC<Props> = (props) => {
    return (
        <div id="wrapper">
            <Header />
            <div className="no-bottom no-top" id="content">
                {props.children}
            </div>
            <Footer />
            {/* <PreLoader /> */}
            <a href="#" className="scrollToTop"><i className='bx bxs-up-arrow-alt bx-tada bx-rotate-90' ></i></a>
        </div>
    )
}

export default Layout

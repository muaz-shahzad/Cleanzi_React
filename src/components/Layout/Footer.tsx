import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <a href="index.html"><img alt="logo" className="logo" src="assets/images/logo.png" /></a>
                                <div className="spacer-20"></div>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/mycleanerhelp"><i className='bx bxl-facebook'></i></a>
                                    <a href="https://twitter.com/mycleanerhelp"><i className='bx bxl-twitter' ></i></a>
                                    <a href="https://www.instagram.com/mycleanerhelp/"><i className='bx bxl-instagram' ></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h5><i className='bx bx-phone-call'></i> Call Us</h5>
                                <p>+1 1234-567-89</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h5><i className='bx bx-envelope' ></i> Email Us</h5>
                                <p>hello@konnectplugins.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h5><i className='bx bx-map' ></i> Address</h5>
                                <p>#12 cross lane banglore</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="align-self-center ml-auto header-col-right">
                        <NavLink className="btn-custom btn-nav" to="/blog-single">Blog<i className='bx bxs-right-arrow-circle bx-burst bx-flip-vertical' ></i></NavLink>
                        <i id="menu-btn" className='bx bx-menu-alt-left' ></i>
                    </div>
               
                    <div className="align-self-center ml-auto header-col-right">
                        <NavLink className="btn-custom btn-nav" to="/careers">Careers<i className='bx bxs-right-arrow-circle bx-burst bx-flip-vertical' ></i></NavLink>
                        <i id="menu-btn" className='bx bx-menu-alt-left' ></i>
                        <div className="align-self-center ml-auto header-col-right">
                            <NavLink className="btn-custom btn-nav" to="/quote">Get Free Quote <i className='bx bxs-right-arrow-circle bx-burst bx-flip-vertical' ></i></NavLink>
                            <i id="menu-btn" className='bx bx-menu-alt-left' ></i>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom';
import QuickBookingForm from '../Home/QuickBookingForm';
import Footer from './Footer';
import Header from './Header';
import PreLoader from './PreLoader';

interface Props{
    children:any
}

const HomeLayout:React.FC<Props> = (props) => {
    return (
        <div id="wrapper">
            <Header />
            <div className="no-bottom no-top" id="content">
                <section className="full-height vertical-center" id="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                                <img className="shape-2" src="assets/images/shape-2.svg" alt="shape" />
                                <div className="imgStyle image" data-tilt="" data-tilt-max="10">
                                    <QuickBookingForm />
                                </div>
                            </div>

                            <div className="col-lg-6 offset-lg-1 wow fadeInLeft" data-wow-delay=".5s">

                                <h1>Nothing inspires <span className="id-color">cleanliness</span> more than an unexpected
                                    guest.</h1>
                                <p className="lead">THE BEST
                                CLEANING SERVICE
                                IN YOUR CITY.<br/>
                                Make your life easy with
                                MyCleanerHelp today!.</p>
                                <div className="spacer-20"></div>
                                <NavLink className="btn-custom" to="/book-service">Book Now <i className='bx bxs-chevrons-right bx-tada'></i></NavLink>
                                <img className="shape-1" src="assets/images/shape-1.svg" alt="banner" />
                                <div className="mb-sm-30"></div>

                            </div>
                        </div>
                    </div>
                </section>
                {props.children}
                <Footer />
                {/* <PreLoader /> */}
                <a href="#" className="scrollToTop"><i className='bx bxs-up-arrow-alt bx-tada bx-rotate-90'></i></a>
            </div>
        </div>
    )
}

export default HomeLayout

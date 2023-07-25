import React from 'react'
import { NavLink } from 'react-router-dom';
const OurServices = () => {
    return (
        <React.Fragment>
            <section id="section-highlight" className="wave-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="text-center">
                                <h2><span className="uptitle id-color">Our Services</span>What We Do?</h2>
                                <p className="lead">We are the go-to professional platform for quality cleaning services. With us you can forget about cleaning as we do it for you as often as you want. Cleaning worries are a thing of the past because with My Cleaner Help, everything is neat & tidy.</p>
                                <div className="spacer-20"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb40 wow fadeInUp" data-wow-delay="0s">
                            <div className="feature-box f-boxed style-3">
                                <i className='bx bx-home-heart bg-color i-circle'></i>
                                <div className="text">
                                    <NavLink to="/services">
                                        <h4>Residential</h4>
                                    </NavLink>
                                    We cover Residential places and make it look the home you deserve.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                            <div className="feature-box f-boxed style-3">
                                <i className='bx bx-camera-home bg-color i-circle'></i>
                                <div className="text">
                                    <NavLink to="/services">
                                        <h4>Commercial</h4>
                                    </NavLink>
                                    Commercial places are also coveredby our extra-ordinary team and service. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <NavLink className="btn-custom" to="/book-service">Book Now</NavLink>
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </section>
            <section id="section-banner" className="no-top wave-top-left">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight"
                            data-wow-delay="0s">
                            <div className="image imgStyle" data-tilt="" data-tilt-max="10">
                                <img className="relative img-fluid" src="assets/images/ui/London_housekeeping_new.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay="0s">
                            <h2>Cleaniness is a state of <span className="id-color">Purity and Clarity</span></h2>
                            <p>
                            Book your cleanings from anywhere, any time with our mobile friendly system.<br/> 
                            Get the best My cleaner help experience including real-time task tracking, privacy-protected communication and support by downloading the iOS/Android app.
                            </p>
                            <div className="spacer-half"></div>
                            <NavLink className="btn-custom" to="/book-service">Book Now</NavLink>
                        </div>
                        <div className="spacer-double"></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default OurServices

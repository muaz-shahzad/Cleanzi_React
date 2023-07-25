import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const About = () => {
    return (
        <React.Fragment>
            <Layout>
                {/* banner section */}
                <section id="banner-inner">                    
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>About us</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>  
                                <div className="spacer-20"></div>
                                <div className="mb-sm-30"></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner section */}
                {/* cleanliness section */}
                <section id="section-banner" className="mpt-20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight" data-wow-delay="0s">
                                <div className="image imgStyle" data-tilt="" data-tilt-max="10">
                                <img className="relative img-fluid" src="assets/images/logo-2.png" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 wow fadeInLeft" data-wow-delay="0s">
                                <h2>What makes <span className="id-color">My Cleaner</span> Help unique?</h2>
                                <p>
                                Because your satisfaction is guaranteed. If you're not satisfied, we'll re-clean for free. Book online, Call or Email us anytime you need a hand with your cleaning, whether it is a single occasion or regularly scheduled cleaning. We take pride in all our work, big or small, and as a result are more than happy to provide a reference from one of our many satisfied customers.
                                </p>
                                <div className="spacer-half"></div>
                                <NavLink className="btn-custom" to="/book-service">Book Now </NavLink>
                            </div>
                            <div className="spacer-double"></div>
                        </div>
                    </div>
                </section>
                {/* cleanliness section */}
                
                {/* why us section */}
                
                <section id="section-banner" className="mpt-20">
                    <div className="container">
                        <div className="">
                            <h3>OUR PROFESSIONAL CLEANER?</h3>
                            <p className="lead">My cleaner help, Cleaning Service company currently has 20 dedicated full time maids. All of our maids experienced and reliable, and will be sure to meet any special requests our customer may have. You can also be assured that same maid will return however frequent you may request our services. Some of our maids have been working with me for over 10 years and have a long track record of being professional and trustworthy.</p>
                            <h3>OUR RATES</h3>
                            <p className="lead">My cleaner help, Cleaning Services we believe our clients should receive a competitive reasonable price. All basic cleaning services are provided at a base rate per hour. Our services can be provided on a one time basis, weekly, bi-weekly, monthly, or just about any schedule our clients desire.</p>
                            <h3>OUR SUPPORT TEAM</h3>
                            <p className="lead">Call us, we pick up. E-mail us, we respond the same day. Text us...we’ll reply within minutes (if not seconds!). My cleaner help' award winning support team is a tight-knit group of people who know how to do the right thing.
        Text us updates on the fly, and we will make sure we communicate your desires to our Pro-Team. Get it off your mind and let us handle it.
        Cancel, change, edit your appointments as much as you like! You're paying for the service...it should fit into your plans.
        We aren’t afraid of admitting when we make a mistake. In fact, we do several times each day - but we work hard to make it right when we do. Customer first. Always.</p>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </section>
                {/* why us section */}

                {/* testimonials 
                <section id="section-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2><span className="uptitle id-color">Testimonial</span>Customer says </h2>
                                    <div className="spacer-20"></div>
                                </div>
                                <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                                    <div className="item">
                                        <div className="cz_testi opt-2">
                                            <blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non tellus nec ante congue pellentesque. Vestibulum vitae varius lectus. Lorem ipsum dolor sit amet.</p>
                                                <div className="test-auth"><span><i className='bx bxs-user' ></i> Kiran Jeo</span></div>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cz_testi opt-2">
                                            <blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non tellus nec ante congue pellentesque. Vestibulum vitae varius lectus. Lorem ipsum dolor sit amet.</p>
                                                <div className="test-auth"><span><i className='bx bxs-user' ></i> Smith Dev</span></div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}
            </Layout>
        </React.Fragment>
    )
}

export default About

import React from 'react'
import { NavLink } from 'react-router-dom'

const Testimonials = () => {
    return (
        <React.Fragment>
           <section id="section-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2><span className="uptitle id-color">Simple Process</span>How It Works </h2>
                                <div className="spacer-20"></div>
                            </div>
                            <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                                <div className="item">
                                    <div className="cz_testi opt-2">
                                        <h3>Book Online</h3>
                                        <blockquote>
                                            <img src="assets/images/ui/how1.jpg" alt="how it works" />
                                            <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i></span></NavLink></div>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cz_testi opt-2">
                                        <h3>We are Going to Clean</h3>
                                        <blockquote>
                                        <img src="assets/images/ui/how2.jpg" alt="how it works" />
                                            <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i> </span></NavLink></div>
                                        </blockquote>
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <div className="cz_testi opt-2">
                                        <h3>You Relax</h3>
                                        <blockquote>
                                            <img src="assets/images/ui/how3.jpg" alt="how it works" />
                                            <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i></span></NavLink></div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </React.Fragment>
    )
}

export default Testimonials

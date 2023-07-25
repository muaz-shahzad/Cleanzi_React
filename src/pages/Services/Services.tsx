import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Services = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">                    
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>Serives</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                      <li className="breadcrumb-item active" aria-current="page">Serives</li>
                                    </ol>
                                  </nav> 
                                <div className="spacer-20"></div>                              
                                <div className="mb-sm-30"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-highlight" className="wave-top">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-12 col-md-12 mb40 wow fadeInUp" data-wow-delay="0s">
                                <div className="text-center">
                                    <h2><span className="uptitle id-color"></span>CLEANING SERVICES</h2>
                                    <p className="lead">Book a quality cleaning service that values customer happiness more than anything. <br/>With My Cleaner Help, you and your property are in good hands!</p>
                                    <div className="spacer-20"></div>
                                    <div className="col-md-12 text-center">
                                        <NavLink className="btn-custom" to="/book-service">Book Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            
                            <div className="col-lg-4 col-md-4 mb40 wow fadeInUp" data-wow-delay="0s">
                                <div className="feature-box f-boxed style-3 text-center">
                                    <i className='bx bx-home-heart bg-color i-circle'></i>
                                    <div className="text">
                                        <h4>Bathroom</h4>
                                        <img src="assets/images/ui/bathroom.jpg" className="services-img" alt="bathroom"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 mb40 wow fadeInUp" data-wow-delay="0s">
                                <div className="feature-box f-boxed style-3 text-center">
                                    <i className='bx bx-home-circle bg-color i-circle'></i>
                                    <div className="text">
                                        <h4>Bedroom</h4>
                                        <img src="assets/images/ui/house_clean.jpg" className="services-img" alt="bathroom"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                                <div className="feature-box f-boxed style-3 text-center">
                                    <i className='bx bx-camera-home bg-color i-circle' ></i>
                                    <div className="text">
                                        <h4>Kitchen</h4>
                                        <img src="assets/images/ui/kitchen.jpg" className="services-img" alt="bathroom"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 mb40 sq-item wow fadeInUp text-center" data-wow-delay=".27s">
                                <p>Vacuum and mop the floor | Empty containers | Dust and clean all surfaces | Clean mirrors | General order</p>
                            </div>
                        </div>
                        <div>
                            <h2><span className="uptitle id-color"></span>General order</h2>
                            <p className="lead">General cleaning or occasional cleaning derived from a particular situation, usually related to an event or a new construction (cleaning of new construction, renovations of premises, inaugurations, large sporting and cultural events), cleaning and maintenance of the interior of all types of buildings, offices, large commercial and leisure areas, museums, sports centers, airports, centers and means of transport, educational centers, hotels and accommodation</p>
                            <div className="spacer-20"></div>
                            <h2><span className="uptitle id-color"></span>Home/ Commercial</h2>
                            <p className="lead">At My Cleaner Help we offer the most complete office cleaning service on the market. Some of the cleaning and maintenance tasks that we carry out are:</p>
                            <ul className="list-ul">
                                <li>In depth cleaning and disinfection of bathrooms and toilets
                                In depth cleaning and disinfection of bathrooms and toilets</li>
                                <li>Cleaning, scrubbing and kitchen maintenance</li>
                                <li>Cleaning of furniture and shelves</li>
                                <li>Emptying bins, cleaning windows and panels</li>
                                <li>Disinfection and cleaning of computer equipment, electronic and telephone equipment</li>
                                <li>Cleaning and maintenance treatments for all kinds of floors</li>
                            </ul>
                            <div className="spacer-20"></div>
                            <h2><span className="uptitle id-color"></span>Hotels and tourist apartments</h2>
                            <p className="lead">From My Cleaner Help we also respond to the needs of the most demanding hotel establishments with specialized services and personnel.</p>
                            <ul className="list-ul">
                                <li>Room cleaning</li>
                                <li>Departure cleaning and client cleaning</li>
                                <li>Cover or uncovered cleaning</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* extra offer */}
                <section id="section-fun-facts" className="pt60 pb60 text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 wow fadeInUp text-center" data-wow-delay="0s">
                                <h3 className="extra-services">Extra Services</h3>
                            </div>
                            <div className="col-lg-2 col-md-2 offset-lg-1 offset-md-1 wow fadeInUp" data-wow-delay="0s">
                                <div className="cz_count">
                                    <i><img src="assets/images/ironing.png" alt="ironing" /></i>
                                    <h4>Ironing</h4>
                                </div>
                            </div>

    
                            <div className="col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0s">
                                <div className="cz_count">
                                    <i><img src="assets/images/washing.png" alt="laundry" /></i>
                                    <h4>laundry</h4>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0s">
                                <div className="cz_count">
                                    <i><img src="assets/images/fridge.png" alt="fridge" /></i>
                                    <h4>Inner Fridge</h4>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0s">
                                <div className="cz_count">
                                    <i><img src="assets/images/window.png" alt="window" /></i>
                                    <h4>Interior Windows</h4>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0s">
                                <div className="cz_count">
                                    <i><img src="assets/images/oven.png" alt="oven" /></i>
                                    <h4>oven</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* extra offer */}

                {/* what we offer */}
                <section id="section-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2><span className="uptitle id-color"></span>What We Offer </h2>
                                    <div className="spacer-20"></div>
                                </div>
                                <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                                    <div className="item">
                                        <div className="cz_testi opt-2">
                                            <h3>Regular Cleaning</h3>
                                            <blockquote>
                                                <p>A cleaning service catered towards properties that are in good condition but require on-going maintenance</p>
                                                <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i></span></NavLink></div>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cz_testi opt-2">
                                            <h3>Deep Cleaning</h3>
                                            <blockquote>
                                                <p>A cleaning service catered towards properties that have not been cleaned in over 2 months</p>
                                                <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i></span></NavLink></div>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cz_testi opt-2">
                                            <h3>Move In/Out Cleaning</h3>
                                            <blockquote>
                                                <p>A top-to bottom cleaning service catered towards a brand new beginning at a new home. Begin your new chapter with a shine!</p>
                                                <div className="test-auth"><NavLink to="/book-service"><span>Book Now <i className='bx bxs-right-arrow'></i></span></NavLink></div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* what we offer */}
            </Layout>
        </React.Fragment>
    )
}

export default Services

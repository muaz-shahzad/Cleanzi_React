import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Offers = () => {
    return (
        <React.Fragment>
            <Layout>
                <section id="banner-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>End of tenancy cleaning</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">end of tenancy cleaning</li>
                                    </ol>
                                </nav>
                                <div className="spacer-20"></div>
                                <div className="mb-sm-30"></div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="section-highlight" className="contact-us pt40 mpt-20">
                    <div className="card shadow col-md-11 col-lg-11" style={{margin: 'auto'}}>
                        <div className="container-fluid">
                            <div className="col-md-12 text-center mt-4">
                                <h3 className="font-weight-bold">Do you need professional end of tenancy cleaning at an
                                    affordable price?</h3>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                                <h4 className="font-weight-bold text-info">Have a look at our offers!</h4>
                            </div>

                            <div className="row mb-5 text-center justify-content-center">
                                <div className="col-md-3 col-lg-3 col-sm-12 card shadow mr-3 mb-5" style={{maxWidth: '275px'}}>
                                    <div className="card-header bg-white">
                                        <h5 className="card-title font-weight-bold mt-4">End of Tenancy Cleaning</h5>
                                        <div className="text-center mt-4">
                                            <p><strong>House 3 Bedrooms, 2 Bathrooms</strong></p>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <p><del>360.00 GBP</del> </p>
                                        <p className="text-info"><strong>320.00 GBP</strong></p>
                                        <NavLink to="/book-service" className="btn btn-info">Book Now</NavLink>
                                    </div>
                                </div>

                                <div className="col-md-3 col-lg-3 col-sm-12 card shadow mr-3 mb-5" style={{maxWidth: '275px'}}>
                                    <div className="card-header bg-white">
                                        <h5 className="card-title font-weight-bold mt-4">End of Tenancy Cleaning</h5>
                                        <div className="text-center mt-4">
                                            <p><strong>Flat/house 2 Bedroom, 1 bath</strong></p>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <p><del>270.00 GBP</del> </p>
                                        <p className="text-info"><strong>250.00 GBP</strong></p>
                                        <NavLink to="/book-service" className="btn btn-info">Book Now</NavLink>
                                    </div>
                                </div>

                                <div className="col-md-3 col-lg-3 col-sm-12 card shadow mr-3 mb-5" style={{maxWidth: '275px'}}>
                                    <div className="card-header bg-white">
                                        <h5 className="card-title font-weight-bold mt-4">End of Tenancy Cleaning</h5>
                                        <div className="text-center mt-4">
                                            <p><strong>House 4 Bedroom / 2 Bathroom</strong></p>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <p><del>470.00 GBP</del> </p>
                                        <p className="text-info"><strong>405.00 GBP</strong></p>
                                        <NavLink to="/book-service" className="btn btn-info">Book Now</NavLink>
                                    </div>
                                </div>

                                <div className="col-md-3 col-lg-3 col-sm-12 card shadow mr-3 mb-5" style={{maxWidth: '275px'}}>
                                    <div className="card-header bg-white">
                                        <h5 className="card-title font-weight-bold mt-4">End of Tenancy Cleaning</h5>
                                        <div className="text-center mt-4">
                                            <p><strong>Flat/house 1 Bedroom, 1 bath</strong></p>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <p><del>120.00 GBP</del> </p>
                                        <p className="text-info"><strong>99.00 GBP</strong></p>
                                        <NavLink to="/book-service" className="btn btn-info">Book Now</NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer bg-yellow ml-0 pb-4">
                            <div className="eotc-footer">
                                <h3 className="text-info font-weight-bold">Services included:</h3>
                                <ul style={{listStyleType: 'disc'}}>
                                    <li className="text-black">End of tenancy cleans – Enjoy top to bottom cleaning, tailored to your requirements.</li>
                                    <li className="text-black">Moving in cleans – Moving into a new home? Make sure the place is sparkling to help
                                        you start afresh.</li>
                                    <li className="text-black">Pre-sale cleans – Selling your home? We provide pre-sale cleaning to give the best
                                        first impression of your property to attract buyers.</li>
                                    <li className="text-black">Our specialist team will work through your home top to bottom to ensure there is no
                                        mess left and your home is left in pristine condition.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>            
        </React.Fragment>
    )
}

export default Offers

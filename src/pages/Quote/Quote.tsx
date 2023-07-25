import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import QuoteForm from '../../components/Quote/QuoteForm';

const Quote = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12 wow fadeInLeft" data-wow-delay=".5s">
                                <h1>Quot</h1>
                          <nav aria-label="breadcrumb" className="custom-bread">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                              <li className="breadcrumb-item active" aria-current="page">Quote</li>
                            </ol>
                          </nav> 
                          <div className="spacer-20"></div>
                          <div className="mb-sm-30"></div>
                        </div>
                      </div>
                    </div>
                  </section>


                  <section id="section-highlight" className="contact-us pt40 mpt-20">
                    <div className="container">
                        <div className="col-md-12 text-center">
                            <h1>Get a free Quote</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 d-none d-lg-block d-xl-block text-center wow fadeInRight"
                                data-wow-delay="0s">
                                <p>
                                    At my cleaner help, our goal is not just awesome cleaners and excellent service – it’s taking the hassle out of scheduling a home cleaning altogether. Your peace of mind is our priority and with our online quoting and booking system, you’ll never have wonder what’s included or how much it will cost. And if anything comes up, our top-notch support team is just a call or click away.
                                </p>
                                <h3>What sets us apart from other london cleaning companies?</h3>
                                <p>
                                    Professional, bonded cleaning teams <br />
                                    All products and equipment provided <br />
                                    Fully insured against damages and accidents <br />
                                    Responsive customer service team
                                </p>
                                <p>
                                    Get a free quote now, and Our customer support team will respond on the same day to confirm availability and answer any questions you might have.
                                </p>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
                                <div className="card custom-card">
                                    <div className="card-body text-center">
                                        <h4> Request a Quote</h4>
                                    </div>
                                </div>
                                <div className="cz_form">
                                    <QuoteForm />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default Quote

import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ContactForm from '../../components/Contact/ContactForm';
import GoogleMap from '../../components/Elements/GoogleMap';

const Contact = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>Contact Us</h1>
                          <nav aria-label="breadcrumb" className="custom-bread">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 wow fadeInLeft" data-wow-delay="0s">
                                <div className="card custom-card">
                                    <div className="card-body">
                                        <h4><i className="bx bx-map"></i> Address</h4>
                                        <p className="card-text">#12 cross lane banglore</p>
                                    </div>
                                </div>
                                <div className="cz_form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="map-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <GoogleMap />
                                <div id="cont" style={{display:'none'}}><img className="logo-change" src="images/logo-2.png"
                                        width='120' alt="logo" />
                                    <p style={{color: '#333', fontSize: '16px', fontWeight: 400}}>Koramangala, Banglore<br/>
                                        Karnataka, INDIA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>            
        </React.Fragment>
    )
}

export default Contact

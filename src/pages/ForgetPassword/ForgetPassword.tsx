import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ForgetPasswordForm from '../../components/ForgetPassword/ForgetPasswordForm';

const ForgetPassword = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12 wow fadeInLeft" data-wow-delay=".5s">
                                <h1>Forgot Password</h1>
                          <nav aria-label="breadcrumb" className="custom-bread">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                              <li className="breadcrumb-item active" aria-current="page">Forgot Password</li>
                            </ol>
                          </nav> 
                          <div className="spacer-20"></div>
                          <div className="mb-sm-30"></div>
                        </div>
                      </div>
                    </div>
                  </section>
                <section id="section-highlight" className="pt40 mpt-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight" data-wow-delay="0s">
                                <img className="relative img-fluid" src="https://via.placeholder.com/570x400/dddddd/845EC2" alt="" />
                            </div>
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
                                <div className="cz_form">
                                <h2>Login</h2>
                                    <ForgetPasswordForm />
                                    <li><a href="register.html">Register</a></li>
                                     <li><a href="login.html">Login</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </Layout>            
        </React.Fragment>
    )
}

export default ForgetPassword

import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import RegisterForm from '../../components/Register/RegisterForm';

const Register = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12 wow fadeInLeft" data-wow-delay=".5s">
                                <h1>Register</h1>
                          <nav aria-label="breadcrumb" className="custom-bread">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                              <li className="breadcrumb-item active" aria-current="page">Register</li>
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
                            <div className="col-lg-6 offset-lg-3 wow fadeInLeft" data-wow-delay="0s">
                                <div className="cz_form">
                                <h2>Register</h2>
                                    <RegisterForm />
                                    <ul className="form-list">
                                        <li><NavLink to="/login"><i className='bx bxs-right-arrow-circle'></i> &nbsp;Login</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default Register

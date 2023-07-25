import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import WorkWithUsForm from '../../components/WorkWithUs/WorkWithUsForm';

const WorkWithUs = () => {
    return (
        <React.Fragment>
            <Layout>
                <section id="banner-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>Work With Us</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Work With Us</li>
                                    </ol>
                                </nav>
                                <div className="spacer-20"></div>
                                <div className="mb-sm-30"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-highlight" className="contact-us pt40 mpt-20 text-left">
                    <div className="container">
                        <p className="font-weight-bold">Please complete the questions below and a staff member will contact you
                        </p>
                        <div className="wow fadeInLeft" data-wow-delay="0s">
                            <div className="cz_form">
                                <WorkWithUsForm />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default WorkWithUs

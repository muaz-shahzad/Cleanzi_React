import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Careers = () => {
    return (
        <React.Fragment>
            <Layout>
            <section id="banner-inner">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                    <h1>Careers</h1>
                    <nav aria-label="breadcrumb" className="custom-bread">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Careers</li>
                        </ol>
                    </nav> 
                    <div className="spacer-20"></div>
                    <div className="mb-sm-30"></div>
                    </div>
                </div>
                </div>
            </section>
            <section className="blog-page pad-tb">
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
            </Layout>
        </React.Fragment>
    )
}

export default Careers

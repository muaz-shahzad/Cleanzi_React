import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import GiftCardsForm from '../../components/GiftCards/GiftCardsForm';

const GiftCards = () => {
    return (
        <React.Fragment>
            <Layout>
                <section id="banner-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>Gift Cards</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Gift Cards</li>
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
                            <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight"
                                data-wow-delay="0s">
                                <p>
                                    Gift card is exclusively for our customers, please Sign Up use the form to the right to order your gift card. Or, if you already have a mycleanerhelp account, login and order from your customer dashboard.
                                </p>
                                <p>
                                    Sending gift cards via email: login and order from your customer dashboard. After creating the gift cards, our users can send to their friends or family via email. Simply key in the recipient’s email address and Mycleanerhelp will automatically send the gift card on your behalf via email with the unique card code to the designated recipient.
                                </p>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
                                <div className="card custom-card">
                                    <div className="card-body text-center">
                                        <h4> PURCHASE GIFT CARD</h4>
                                    </div>
                                </div>
                                <div className="cz_form">
                                    <GiftCardsForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>      
        </React.Fragment>
    )
}

export default GiftCards

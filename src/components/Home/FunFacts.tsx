import React from 'react'

const FunFacts = () => {
    return (
        <React.Fragment>
            <section id="section-fun-facts" className="pt60 pb60 text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0s">
                            <div className="cz_count">
                                <i className='bx bx-spray-can'></i>
                                <h3 className="timer" data-to="15425" data-speed="3000">0</h3>
                                <span>Homes</span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".25s">
                            <div className="cz_count">
                                <i className='bx bx-user-check'></i>
                                <h3 className="timer" data-to="8745" data-speed="3000">0</h3>
                                <span>Clients</span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="cz_count">
                                <i className='bx bxs-city'></i>
                                <h3 className="timer" data-to="235" data-speed="3000">0</h3>
                                <span>Cities</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="cz_count">
                                <i className='bx bx-user-voice'></i>
                                <h3 className="timer" data-to="120" data-speed="3000">0</h3>
                                <span>Staff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FunFacts

import React from 'react'
import { NavLink } from 'react-router-dom'
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <React.Fragment>
            <header className="header-light transparent scroll-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <div className="align-self-center header-col-left">
                                    <div id="logo">
                                        <NavLink to="/">
                                            <img alt="logo" src="assets/images/logo-2.png" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="align-self-center ml-auto header-col-mid">
                                    <NavMenu />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header

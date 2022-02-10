import React from 'react'
import {Link} from "react-router-dom"
import errorThumb from '../../assets/images/404.png'
import './error.css'

const ErrorPage = () => {
    return (
        <div className="content-body section">
            <div className="section-wrap section error-404-wrap d-flex align-items-center bg-grey">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="error-404-image col-md-6 col-12 order-1 order-md-2 mb-xs-50">
                            <img src={errorThumb} alt="404 Error"/>
                        </div>

                        <div className="error-404-content col-md-6 col-12 order-2 order-md-1 text-center text-md-left">
                            <h1>OOPS!</h1>
                            <h3>This page cannot be found. It might have been removed or is elsewhere. Head back home?</h3>
                            <Link to={`${process.env.PUBLIC_URL + '/'}`}>Home</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
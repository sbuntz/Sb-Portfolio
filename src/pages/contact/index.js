import React, { Fragment, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from "../../components/header"
import SideHeader from "../../components/header/sideHeader"
import Footer from "../../components/footer"
import Input from "../../components/input"

import aboutData from '../../data/about-me'
import './contact.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/9503c570-86f3-11ec-9bf2-1331efd4d6b3";

const ContactPage = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h3>Thank you!</h3>
                <h4>We'll be in touch soon.</h4>
            </>
        );
    }

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <div className="bg-grey section ml-100">
                <div
                    className="section-wrap section">
                    <Container>
                        <div className="contact-info mt-20">
                            <h4>Contact Infromation</h4>
                            <ul>
                                <Row>
                                    <Col lg={3} className={'mb-45 pl-50'}>
                                        <li>
                                            <span>Phone:</span>
                                            <a href={`tel:${aboutData.phone}`}>{aboutData.phone}</a>
                                        </li>
                                    </Col>
                                    <Col lg={7} className={'mb-45'}>
                                        <li>
                                            <span>Email:</span>
                                            <a href={`mailto:${aboutData.email}`}>{aboutData.email}</a>
                                        </li>
                                    </Col>
                                </Row>
                            </ul>
                        </div>
                        <Row>
                            <Col lg={10} className={'mb-45'}>
                                <div className="contact-form">
                                    <h4>Contact Form</h4>
                                    <form action={FORM_ENDPOINT}
                                        onSubmit={handleSubmit}
                                        method="POST"
                                        target="_blank"
                                        className={'pl-30'} id="contact-form" action="/">
                                        <Input type={'text'} id={'name'} name={'name'} placeholder={'Name'} required={true} />
                                        <Input type={'email'} id={'email'} name={'email'} placeholder={'Email'} required={true} />
                                        <Input type={'textarea'} id={'message'} name={'message'} placeholder={'Message'} required={true} />
                                        <button type={'submit'}>Send a message</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default ContactPage;
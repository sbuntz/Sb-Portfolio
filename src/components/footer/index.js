import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import './footer.css'

const Footer = () => {
    return (
        <div className="footer-section section position-fixed pt-30 pb-30">
            <Container fluid>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Stefanie Buntz</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;

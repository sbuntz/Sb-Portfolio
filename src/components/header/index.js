import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Logo from "../logo"
import NavBar from "../navbar"
import Social from "../social"

import './header.css'

const Header = () => {
    return (
        <Container fluid>
            <Row className='align-items-center px-5'>
                <Logo />
                <NavBar />
                <Social />
            </Row>
        </Container>
    );
};

export default Header;

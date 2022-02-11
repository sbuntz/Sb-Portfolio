import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import PageContainer from "../../components/scroll"

import Header from "../../components/header"
import SideHeader from "../../components/header/sideHeader"
import Footer from "../../components/footer"
import Skill from "../../components/skill"

import aboutData from '../../data/about-me'
import './about.css'

const AboutPage = () => {
    return (
        <div>
            <Header classes={'position-static'}  />
            <SideHeader mobile={true} />

            <PageContainer>
                <div>
                    <Container>
                    <h3 className='aboutHeader ml-80'>About me</h3>
                        <Row className={'align-items-center'}>
                            
                            <Col lg={6}>
                                <div classes="about-content">
                                  
                        
                                    <p>{aboutData.bio}</p>
                                    <ul className="personal-info">
                                        <li><span>Phone:</span>{aboutData.phone}</li>
                                        <li><span>Email:</span>{aboutData.email}</li>
                                    </ul>

                                    <h4>Skill</h4>

                                    <div className="skill-wrap">
                                        {aboutData.skills.map(skill => (
                                            <Skill
                                                key={skill.id}
                                                title={skill.title}
                                                percentage={skill.percentage}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} className = 'pr-50 mr-30'>
                            
                            <div className="aboutPicture">
                                <img className='rounded-circle img-raised' src={require(`../../assets/images/about.jpg`)} alt="thumb" />

                            </div>
                        </Col>
                        </Row>
                    </Container>
                </div>
            </PageContainer >

            <Footer />
        </div >
    );
};

export default AboutPage;
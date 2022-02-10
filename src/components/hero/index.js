import React from 'react'
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import heroVideo from '../../assets/videos/heroVideo.mp4'
import aboutData from '../../data/about-me'

import './hero.css'

const BannerFreelancerPortfolio = () => {
    return (
        <div >
            <ReactPlayer className='section main-slider-1'
                url={heroVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <Container >
                <div className>
                    <div className='banner-overlay'>
                        <div className="slider-banner-info">
                            <h2>{aboutData.name}</h2>
                            <h6 className='role'>{aboutData.role}</h6>
                            <h5 className='role description'>{aboutData.description}</h5>
                            <div className='socialLinks'>
                                <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className='link fa fa-linkedin' />
                                </a>
                                <a href={aboutData.github} target="_blank" rel="noopener noreferrer">
                                    <i className='link fa fa-github' />
                                </a>
                                <a className='link' href={aboutData.resume} target="_blank" rel="noopener noreferrer">
                                    resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default BannerFreelancerPortfolio;
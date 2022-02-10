import React from 'react';
import aboutData from '../../data/about-me'

import './header.css'

const HeaderSocial = () => {
    const openSideMenu = () => {
        const sideMenuWrap = document.querySelector(".side-header");
        const overlay = document.querySelector('.side-menu-overlay');
        sideMenuWrap.classList.add('side-menu-open');
        overlay.classList.add('overlay-show');
    };

    return (
        <div className="header-social d-flex align-items-center justify-content-end col-lg-2 col-6">
            <button
                className="side-header-toggle d-block d-lg-none order-12 ml-20"
                onClick={openSideMenu}
            >
                <span />
            </button>
            <div className='socials'>
                <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-linkedin' />
                </a>
                <a href={aboutData.github} target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-github' />
                </a>
                <a className='resume' href={aboutData.resume} target="_blank" rel="noopener noreferrer">
                    resume
                </a>
            </div>
        </div>
    );
};

export default HeaderSocial;

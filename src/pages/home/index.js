import React from 'react';

// File imported
import Header from "../../components/header";
import SideHeader from "../../components/header/sideHeader";
import Hero from "../../components/hero";
import Footer from "../../components/footer";

const HomeFreelancerPortfolio = () => {
    return (
        <div className={'main-wrapper p-0'}>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <Hero/>
            <Footer position={'static'}/>
        </div>
    );
};

export default HomeFreelancerPortfolio;

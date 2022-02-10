import React, {Fragment} from 'react'
import Header from "../../components/header"
import SideHeader from "../../components/header/sideHeader"
import MasonryThree from "../../components/grid"
import Footer from "../../components/footer"
import portfolioData from '../../data/portfolio'

import './portfolio.css'

const Portfolio = () => {
    const portfolios = portfolioData;

  return (
        <Fragment>
            <Header classes='position-static'/>
            <SideHeader mobile={true}/>
            <MasonryThree portfolios={portfolios}/>
            <Footer/>
        </Fragment>
    );
};

export default Portfolio;
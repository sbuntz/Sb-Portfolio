import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404Error";

import './App.css'

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`}
                           component={ContactPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                           component={PortfolioPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           component={AboutPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home"}`}
                           component={HomePage}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomePage}
                    />
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
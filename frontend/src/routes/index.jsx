import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../container/Footer";
import Header from "../container/Header";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import AboutUs from "./../pages/AboutUs/index";
import Admin from './../pages/Admin/index'
import Login from './../pages/login/index';
import NewLand from './../pages/NewLand/index';
import Lands from './../pages/Lands/index';
import LandDetails from './../pages/LandDetails/index';
import Details from './../pages/Detalis/index';

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/lands/details/:id' component={Details}/>
          <Route path='/lands/:id' component={LandDetails} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs } />
          <Route path='/our-services' component={Services} />
          <Route path='/new-land' component={NewLand} />
          <Route path='/land-list' component={Lands} />
          <Route path='/admin' component={Admin } />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  state = {
    dropdown: false,
  };
  handleClick = () => {
    this.state.dropdown
      ? this.setState({ dropdown: false })
      : this.setState({ dropdown: true });
  };
  render() {
    return (
      <div className="header" style={this.state.dropdown === false ? {height: '60px'}: {}}>
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.jpg" alt="logo"  height="70px"/>
          </Link>
        </div>
        <div className="header__menuIcon" onClick={this.handleClick}>
          <img src="/assets/icons/menu-icon.svg" alt="" />
          <nav
            className={`header__resNav ${
              this.state.dropdown ? "show" : "hide"
            }`}
          >
            <ul>
              <a href="/land-list">
                <li>LANDS</li>
              </a>
              <a href="/our-services">
                <li>OUR SERVICES</li>
              </a>
              <a href="/about-us">
                <li>ABOUT US</li>
              </a>
              <a href="/contact-us">
                <li>CONTACT US</li>
              </a>
            </ul>
          </nav>
        </div>

        <nav className="header__nav">
          <ul>
            <a href="/land-list">
              <li>LANDS</li>
            </a>
            <a href="/our-services">
              <li>OUR SERVICES</li>
            </a>
            <a href="/about-us">
              <li>ABOUT US</li>
            </a>
            <a href="/contact-us">
              <li>CONTACT US</li>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    // Refs
    this.rootRef = React.createRef();

    // State Object
    this.state = {};

    // Binding Methods
  }
  openNav = () => {
    let current = this.rootRef.current;
    let menuOpen = current.querySelector(".header-menu-open");
    let menuClose = current.querySelector(".header-menu-close");
    let nav = current.querySelector(".header-nav");
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    nav.style.display = "flex";
  };
  closeNav = () => {
    let current = this.rootRef.current;
    let menuOpen = current.querySelector(".header-menu-open");
    let menuClose = current.querySelector(".header-menu-close");
    let nav = current.querySelector(".header-nav");
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    nav.style.display = "none";
  };
  closeNav;
  menuCloseClicked = () => {
    this.closeNav();
  };
  menuOpenClicked = () => {    
    this.openNav();
  };
  setIndicator = (name) => {
    name = name === "" ? "home" : name;
    let current = this.rootRef.current;
    let indicator = current.querySelector(".header-nav-indicator");
    let links = current.querySelectorAll(".header-link");
    let nav = current.querySelector(".header-nav");
    let navPos = nav.getBoundingClientRect();
    let menuOpen = current.querySelector(".header-menu-open");
    let menuClose = current.querySelector(".header-menu-close");

    for (let link of links) {
      let text = link.innerText.substr(3).toLowerCase();
      if (text === name) {
        nav.style.display = "flex";
        let linkPos = link.getBoundingClientRect();        
        let left = linkPos.left - navPos.left;
        let top = linkPos.top - navPos.top;
        let width = link.clientWidth;
        let height = link.clientHeight;

        if (window.innerWidth < 1000) {
          indicator.style.left = `auto`;
          menuOpen.style.display = "block";
          indicator.style.top = `${top + height}px`;
          nav.style.display = "none";
          
        } else {
          indicator.style.left = `${left}px`;
          indicator.style.top = `auto`;
          nav.style.display = "flex";
          menuOpen.style.display = "none";
        }
        menuClose.style.display = "none";
        indicator.style.width = `${width}px`;
        break;
      }
    }
  };
  initializeIndicator = () => {
    let path = window.location.pathname;
    let name = path.substr(1);    
    this.setIndicator(name);
  };
  componentDidMount() {
    this.initializeIndicator();
    window.onresize = (e) => {
      this.initializeIndicator();
    };
  }
  render() {
    return (
      <header
        className="Header"
        id={this.props.id}
        ref={this.rootRef}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseOver={this.props.onMouseOver}
        style={this.props.style}
      >
        <img
          className="header-menu-icon header-menu-close"
          alt="No Image"
          src={require("../../assets/shared/icon-close.svg").default}
          onClick={this.menuCloseClicked}
        />
        <img
          className="header-menu-icon header-menu-open"
          alt="No Image"
          src={require("../../assets/shared/icon-hamburger.svg").default}
          onClick={this.menuOpenClicked}
        />
        <img
          className="header-logo"
          alt="No Image"
          src={require("../../assets/shared/logo.svg").default}
        />
        <div className="header-line"></div>
        <nav className="header-nav">
          <div className="header-nav-indicator"></div>
          <Link
            to="/"
            className="header-link"
            onClick={() => {
              this.setIndicator("home");
            }}
          >
            <span>00</span> Home
          </Link>
          <Link
            to="/destination"
            className="header-link"
            onClick={() => {
              this.setIndicator("destination");
            }}
          >
            <span>01</span> Destination
          </Link>
          <Link
            to="/crew"
            className="header-link"
            onClick={() => {
              this.setIndicator("crew");
            }}
          >
            <span>02</span> Crew
          </Link>
          <Link
            to="/technology"
            className="header-link"
            onClick={() => {
              this.setIndicator("technology");
            }}
          >
            <span>03</span> Technology
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;

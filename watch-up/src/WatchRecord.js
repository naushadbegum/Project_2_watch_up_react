import React from "react";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import MyWatch from "./pages/MyWatch";
import * as ReactBootstrap from 'react-bootstrap';
import "./css/style.css";


export default class WatchRecord extends React.Component {
  state = {
    active: 'home',
    activeWatch: ''
  };

  setActive = (page, watchId) => {
    if (watchId) {
      this.setState({
        active: page,
        activeWatch: watchId
      })
    }
    else {
      this.setState({
        'active': page
      });
    }
  };

  renderActive = () => {
    const active = this.state.active;

    if (active === "home") {
      return (
        <Home setActive={this.setActive} />
      );
    } else if (active === "addnew") {
      return (
        <AddNew setActive={this.setActive} />
      );
    } else if (active === "mywatch") {
      return (
        <MyWatch setActive={this.setActive} />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <ReactBootstrap.Navbar className='navbar' collapseOnSelect  bg='light' expand='lg'>
          <ReactBootstrap.Container fluid>
            <ReactBootstrap.Navbar.Brand
              className='ms-3'
              href='#home'
              onClick={() => {
                this.setActive('home');
              }}
            >
              <img
                className='logo-img'
                src={require('./images/logo.png')}
                alt='Watch up logo'
              />
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Brand
              className='ms-3'
              id='website-name'
              href='#home'
            >
              WATCH-UP
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle
              aria-controls='basic-navbar-nav'
              className='me-3'
            />
            <ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
              <ReactBootstrap.Nav className="justify-content-end">
                <ReactBootstrap.Nav.Link
                  className={
                    this.active === 'home' ? 'active' : ''
                  }
                  href='#home'
                  onClick={() => {
                    this.setActive('home');
                  }}
                >
                 
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link
                  className={
                    this.active === 'addnew' ? 'active' : ''
                  }
                  id="nav-addnew"
                  href='#addnew'
                  onClick={() => {
                    this.setActive('addnew');
                  }}
                >
                  WATCH-UP your watch
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link
                  className={
                    this.active === 'mywatch' ? 'active' : ''
                  }
                  id="nav-mywatch"
                  href='#mywatch'
                  onClick={() => {
                    this.setActive('mywatch');
                  }}
                >
                  My Watches
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        {this.renderActive()}
      </React.Fragment>
    );
  }
}
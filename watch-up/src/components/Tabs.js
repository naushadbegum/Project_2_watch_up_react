import React from 'react';
import Nav from 'react-bootstrap';
import Navbar from 'react-bootstrap';
import Container from 'react-bootstrap';

export default function Tabs(props) {
    return (
<Navbar className='navbar' collapseOnSelect fixed='top' bg='light' expand='lg'>
    <Container fluid>
        <Navbar.Brand
        className='ms-3'
        href='#home'
        onClick={() => {
        props.setActive('home');
}}
        >
            <img 
            className='logo-img'
            src={requestAnimationFrame('./images/logo.png')}
            alt='Watch up logo'
        />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='me-3'
        />
<Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              className={
                props.active === 'home' ? 'active' : ''
              }
              href='#home'
              onClick={() => {
                props.setActive('home');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                props.active === 'addnew' ? 'active' : ''
              }
              href='#addnew'
              onClick={() => {
                props.setActive('recipes');
              }}
            >
              Watch up you watch
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Container>
</Navbar>
    );
}
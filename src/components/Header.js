import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../styles/header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar
        expand='lg'
        bg='dark'
        data-bs-theme='dark'
        className='bg-body-tertiary'
        collapseOnSelect
      >
        <Container>
          <Link to='/' className='text-decoration-none'>
            <Navbar.Brand>CLP</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto py-2 '>
              <Link to='/' className='pe-4 text-decoration-none text-light'>
                Home
              </Link>
              <Link
                to='/course'
                className='pe-4 text-decoration-none text-light'
              >
                Course
              </Link>
              <Link
                to='/about'
                className='pe-4 text-decoration-none text-light'
              >
                About Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

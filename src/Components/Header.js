import React, { useState } from 'react';
import './../css/global.css';
import {Badge, Container, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FiLogOut, FiSearch, FiSettings, FiUser } from 'react-icons/fi';
import profile from './../img/109.png'
import { FaFireAlt, FaRegBell } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <>
        <Navbar expand="lg" className='shadow-sm bg-white'>
            <Container fluid className='navbar-width'>
              <Navbar.Brand href="#"><p className='fw-bold mb-1 fs-4 text-uppercase'>CFI Movie</p></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                
                <div className='mx-auto w-50 my-2 my-lg-0'>

                    <div className="d-flex form-inputs w-100">
                    <input className="form-control" type="text" placeholder="Search for Movie, Events, Activities..." />
                    <FiSearch className="bx-search" />
                    </div>

                </div>

                  
                
                
                <Nav className="ms-auto d-flex align-items-center">
                    <Nav.Link href="#" className="li-margin">
                        <Link to="/" className='text-decoration-none text-secondary'>
                        Movies
                        </Link>
                        </Nav.Link>
                    <Nav.Link href="#" className='li-margin'><Badge bg="danger"><FaFireAlt /> New</Badge></Nav.Link>
                    
                    <Nav.Link href="#" className='li-margin'>
                   

                        <button type="button" class="btn btn-sm btn-dark px-1 py-0 rounded-pill position-relative">
                        <FaRegBell className='small mb-1' />
                        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                        </button>       
                    </Nav.Link>
                    <Nav.Link href="#features" className='ms-2'>
                        <span className='text-secondary me-1'>Welcome Admin</span>
                        <img src={profile} style={{height:'35px', width: '35px'}} className="li-margin" alt="profile-img"  onClick={handleShow} />
                    </Nav.Link>
                   
                    
                </Nav>
                
                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className='bg-secondary text-light ' style={{color: "white"}} closeButton>
                <Offcanvas.Title className='fs-4'>User Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Container>
                    <Row>
                        <div className='d-flex canvas-items justify-content-center'>
                            <div className='p-3 border-bottom d-flex align-items-center'>
                                <FiUser className='me-2 fs-5' /> 
                                <Link to="profile" className='text-dark'>
                                    Profile
                                </Link>
                            </div>
                            <div className='p-3 d-flex align-items-center border-bottom'>
                                 <BiTimeFive className='me-2 fs-5' /> 
                                 <Link to="profile" className='text-dark'>
                                    Watch List
                                </Link>
                            </div>
                            <div className='p-3 d-flex align-items-center border-bottom'>
                                 <FiSettings className='me-2 fs-5' /> 
                                 <Link to="profile" className='text-dark'>
                                    Account Setting
                                </Link>
                            </div>
                            <div className='p-3 d-flex align-items-center border-bottom'>
                                 <AiOutlineCalendar className='me-2 fs-5' /> 
                                 <Link to="profile" className='text-dark'>
                                    Events
                                </Link>
                            </div>
                            <div className='p-3 d-flex align-items-center border-bottom'>
                                 <BsStar className='me-2 fs-5' /> 
                                 <Link to="profile" className='text-dark'>
                                 Celebraties
                                </Link>
                                  
                            </div>
                            <div className='p-3 d-flex align-items-center border-bottom'>
                                 <FiLogOut className='me-2 fs-5' /> 
                                 <Link to="profile" className='text-dark'>
                                 Log Out
                                </Link>
                                    
                            </div>
                            <div className='p-3 border-bottom d-flex align-items-center'>
                                <Link to="login" className='text-dark'>
                                   login-page-demo
                                </Link>
                            </div>
                            <div className='p-3 border-bottom d-flex align-items-center'>
                                <Link to="register" className='text-dark'>
                                    register-page-demo
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
                </Offcanvas.Body>
            </Offcanvas>



              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
};

export default Header;
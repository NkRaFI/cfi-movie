import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <Container fluid>
            <div className='p-3 bg-white text-center'>
            <p className='text-dark mb-0'> &#169; Copyright all right reserve from 2022 By <Link to="/">CFI Movies</Link> </p>
            </div>
        </Container> 
        </>
    );
};

export default Footer;
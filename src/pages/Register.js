import React from 'react';
import './../css/global.css';
import reg from './../img/login-banne.webp';
import { Container, Form, Row } from 'react-bootstrap';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    
    return (
        <>
          <Container fluid className='reg-bg shadow'>
            <Container className='py-5'>
            <Row className='mt-0'>
                <div className='col-lg-6 col-md-6 pe-0 col-sm-12 col-xs-12'>
                    <img src={reg} className="reg-img" alt="" />
                </div>
                <div className='col-lg-6 input-container col-md-6 col-sm-12 col-xs-12'>
                <div className='text-center'>
                    <div className='login-width mx-auto text-center'>

                    <p className='fs-2 mt-3'>Sign Up</p>

                    <form className="login form">
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="text"  placeholder="Enter Name" required/>
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="email"  placeholder="Enter Email" required/>
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="password"  placeholder="Enter Password" required/>
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="password"  placeholder="Confirm Password" required/>
                    
                    <button className='btn btn-dark fw-bold w-100 inputs rounded-0 mt-1' type='submit'>Sign Up</button>
                    </form>
                    <span className='d-block fs-6 my-2 text-muted'>or continue with</span>
                    <div>
                    <span className='social-authentication'><FcGoogle className='rounded-pill fs-1  shadow mx-2 p-2' /></span>
                    <span className='social-authentication'><FaFacebook className='rounded-pill fs-1 shadow mx-2 p-2 text-primary' /></span>
                    <span className='social-authentication'><FaInstagram className='rounded-pill fs-1  shadow mx-2 p-2 text-danger' /></span>
                    </div>
                    </div>
                    <p className='mt-3'>New User ? Register Hare</p>
                </div>
            
                </div>
            </Row>
            </Container>
        </Container>


          


            {/* --------- container not in use ------------- */}
            
            <div className='reg-modal d-none text-start bg-white shadow-sm'>
            <div className='mb-4'>
            <p className='text-dark fs-5'>Select One of the option Below</p>
            </div>

            <div className=''>
                <div className='mb-2'>
                <Form.Check  type="radio" className='text-secondary' label="18 years or Older" />
                </div>
                <div className='mb-2'>
                <Form.Check  type="radio" className='text-secondary' label="i am a parent or legaal gardian registering on behalf of minor" />
                </div>
            </div>
            <div className='mt-5 text-end'>
                <button className='btn btn-secondary btn-sm'> Next <BsFillArrowRightCircleFill className='ms-1 mb-1' /></button>
            </div>

            </div>
            {/* --------- container not in use ------------- */}






          
        </>
    );
};

export default Register;
import React from 'react';
import './../css/global.css';
import login from './../img/login-banne.webp';
import { Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <>
        <Container fluid className='login-bg shadow'>
            <Container className='py-5'>
            <Row className=''>
                <div className='col-lg-6 col-md-6 pe-0 col-sm-12 col-xs-12'>
                    <img src={login} className="login-img" alt="" />
                </div>
                <div className='col-lg-6 input-container col-md-6 col-sm-12 col-xs-12'>
                <div className='text-center'>
                    <div className='login-width mx-auto text-center'>

                        <p className='fs-2 mt-3'>User Login</p>
                    <form className="login form">
                       
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="email"  placeholder="Enter Email" required/>
                    <input className='form-control inputs border-0 shadow rounded-0 my-4' type="password"  placeholder="Enter Password" required/>
                    
                    <button className='btn btn-dark fw-bold w-100 inputs rounded-0 mt-1' type='submit'>Login</button>
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
            
        </>
    );
};

export default Login;
import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const ProjectForm2 = () => {


    return (
        <>
        <Container className="Project_form_Container">
            
            <Form className='second'>
                <Row>

                
                <p className='text-secondary mb-1 fs-5'>Submission Instruction</p>
                <hr className='w-75 ' />
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="ccname" id="ccname" placeholder="Casting Company Name" />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="copy2">    
                <div className='mt-1'>
                <Form.Label className='me-2 text-secondary'>Audition In-Person :</Form.Label>  
                        <Form.Check inline label="Yes" name="aiperson1" type="radio" id="aiperson1" />
                        <Form.Check inline label="No" name="aiperson2" type="radio" id="aiperson2" />
                </div>
                </Form.Group>

                <Form.Group as={Col} md="12"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea" rows="3" name="pyear" id="pyear" placeholder="Add Location Info" />
                </Form.Group>

                <Form.Label>Audition Interview Date :</Form.Label>  
                <InputGroup as={Col} md="6" className="mb-3 border-0">                   
                    <Form.Control type='date' className='border-0 shadow-sm bg-light' aria-label="Dollar amount (with dot and two decimal places)" />
                    <InputGroup.Text className='border-0 shadow-sm'>To</InputGroup.Text>
                    <Form.Control type='date' className='border-0 shadow-sm bg-light'  aria-label="Dollar amount (with dot and two decimal places)" /> 
                </InputGroup>


              
                <p className='text-secondary mt-3 mb-0 fs-5'>Callback Option</p>
                <hr className='w-75 ' />

                <Form.Label>Callback Date :</Form.Label>  
                <InputGroup as={Col} md="6" className="mb-3 border-0">                   
                    <Form.Control type='date' className='border-0 shadow-sm bg-light' aria-label="Dollar amount (with dot and two decimal places)" />
                    <InputGroup.Text className='border-0 shadow-sm'>To</InputGroup.Text>
                    <Form.Control type='date' className='border-0 shadow-sm bg-light'  aria-label="Dollar amount (with dot and two decimal places)" /> 
                </InputGroup>

                <Form.Group as={Col} md="12"  className="mb-3" controlId="callback">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea" rows="3" name="pyear" id="pyear" placeholder="Add Callback Info..." />
                </Form.Group>



                <p className='text-secondary mt-3 mb-0 fs-5'>Shooting Location</p>
                <hr className='w-75 ' />

                <Form.Group as={Col} md="6"  className="mb-3" controlId="shootingLocation">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="shootLocating" id="shootLocating" placeholder="Shotting Location Name" />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="shootingLocation">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="CastLocating" id="CastLocating" placeholder="Casting Location Name" />
                </Form.Group>

                <Form.Label>Casting/Interview Date :</Form.Label>  
                <InputGroup as={Col} md="12" className="mb-3 border-0">                   
                    <Form.Control type='date' className='border-0 shadow-sm bg-light' aria-label="Dollar amount (with dot and two decimal places)" />
                    <InputGroup.Text className='border-0 shadow-sm'>To</InputGroup.Text>
                    <Form.Control type='date' className='border-0 shadow-sm bg-light'  aria-label="Dollar amount (with dot and two decimal places)" /> 
                </InputGroup>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="shootingLocation">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="ProjectLoc" id="ProjectLoc" placeholder="Project Location" />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="shootingLocation">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="payAmount" id="payAmount" placeholder="Payment Amount" />
                </Form.Group>


              
                </Row>



            </Form>
        </Container>
        </>
    );
};

export default ProjectForm2;
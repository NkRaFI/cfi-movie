import React from 'react';
import './../css/global.css';
import { Col, Container, Row, Form } from 'react-bootstrap';

const ProjectForm1 = ({formData}) => {

   
    return (
        <>
        <Container className="Project_form_Container">
            
            <Form className='second'>
                <Row>
                <p className='text-secondary mb-1 fs-5'>Project</p>
                <hr className='w-75 ' />
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="cfiProject" id="cfiProject" placeholder="Your Project Link" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="ProjectTitle" id="role" placeholder="Your Project Title" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="number" name="pyear" id="pyear" placeholder="Project Year" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="role" id="role" placeholder="Role Name" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                <Form.Select className='border-0 bg-light shdaow-sm' aria-label="Default select example">
                    <option>Type of Project</option>
                    <option value="1">Feature Film</option>
                    <option value="2">Short Film</option>
                    <option value="3">Voice Over</option>
                </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="file" name="role" id="role" placeholder="Role Name" />
                </Form.Group>
                <p className='text-secondary mb-1 fs-5'>Project Info</p>
                <hr className='w-75 ' />
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea" name="storyScript" id="storyScript" placeholder="Write Story Script Hare " rows={3} />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea"  name="AdditionalInfo" id="AdditionalInfo" placeholder="Write Project Additional Information" rows={3} />
                </Form.Group>

                <Form.Group as={Col} md="8"  className="mb-3" controlId="copy">    
                <Form.Label>Union Status :</Form.Label>  
                <div>
                        <Form.Check inline label="Union" name="group1" type="radio" id="radio1" />
                        <Form.Check inline label="Non-Union" name="group1" type="radio" id="radio2" />
                        <Form.Check inline label="Not Applicable" name="group1" type="radio" id="radio3" />
                </div>
                </Form.Group>


                <p className='text-secondary mb-1 fs-5'>Project Casting</p>
                <hr className='w-75 ' />
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="cDirector" id="cDirector" placeholder="Casting Director" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="number" name="cDirectorNum" id="cDirectorNum" placeholder="Casting Director Number" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="number" name="cDirectorEmail" id="cDirectorEmail" placeholder="Casting Director Email" />
                </Form.Group>
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="Cname" id="Cname" placeholder="Casting Company Name" />
                </Form.Group>
                </Row>
              



            </Form>
        </Container>
        </>
    );
};

export default ProjectForm1;
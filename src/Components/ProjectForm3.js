import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const StProjectForm3 = () => {
    
  

    return (
        <>
            <Container className="Project_form_Container">
            
            <Form className='second'>
                <Row>
                <p className='text-secondary mb-1 fs-5'>Cast/Crew Info</p>
                <hr className='w-75 ' />
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="trname" id="trname" placeholder="Talent Role Name" />
                </Form.Group>
                
                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="tlocation" id="tlocation" placeholder="Talent Location" />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                <Form.Select className='border-0 bg-light shdaow-sm' aria-label="Default select example">
                    <option>Cast Type</option>
                    <option value="1">Actor</option>
                    <option value="2">Talent</option>
                    <option value="3">Voice Over</option>
                    <option value="2">Other</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type="text" name="castPayment" id="castPayment" placeholder="Rate of Pay, Points" />
                </Form.Group>
                
                
                <p className='text-secondary mb-1 fs-5'>Cast Description</p>
                <hr className='w-75 ' />

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea" name="storyScript" id="storyScript" placeholder="Cast Role Description " rows={3} />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea"  name="AdditionalInfo" id="AdditionalInfo" placeholder="Casr Additional Description" rows={3} />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                <Form.Label>Age Range :</Form.Label>  
                <InputGroup>                   
                    <Form.Control type='number' className='border-0 shadow-sm bg-light' aria-label="Dollar" placeholder='From 12' />
                    <InputGroup.Text className='border-0 shadow-sm'>To</InputGroup.Text>
                    <Form.Control type='number' className='border-0 shadow-sm bg-light'  aria-label="Dollar2" placeholder='50 or more...' /> 
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                <Form.Label>Height Range :</Form.Label>  
                <InputGroup>                   
                    <Form.Control type='number' className='border-0 shadow-sm bg-light' aria-label="Dollar" placeholder='Type in Foot' />
                    <InputGroup.Text className='border-0 shadow-sm'>To</InputGroup.Text>
                    <Form.Control type='number' className='border-0 shadow-sm bg-light'  aria-label="Dollar2" placeholder='Type in Foot' /> 
                </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3 mt-1" controlId="copy">    
                <Form.Label className='me-2 text-secondary'>Gender :</Form.Label>  
                        <Form.Check inline label="Male" name="gender1" type="radio" id="gender1" />
                        <Form.Check inline label="Female" name="gender2" type="radio" id="gender2" />
                        <Form.Check inline label="Other" name="gender3" type="radio" id="gender3" />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type='text' name="tsSkill" id="tsSkill" placeholder="Special Skill "  />
                </Form.Group>




                <p className='text-secondary mb-1 fs-5'>Crew Description</p>
                <hr className='w-75 ' />

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea" name="storyScript" id="storyScript" placeholder="Crew Member Location " rows={2} />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' as="textarea"  name="AdditionalInfo" id="AdditionalInfo" placeholder="Crew Additional Notes " rows={2} />
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3 mt-1" controlId="copy">    
                <Form.Label className='me-2 text-secondary'>Request CFI Profile Link :</Form.Label>  
                <div>
                        <Form.Check inline label="Yes" name="req1" type="radio" id="req1" />
                        <Form.Check inline label="No" name="req2" type="radio" id="req2" />
                </div>
                </Form.Group>

                <Form.Group as={Col} md="6"  className="mb-3 mt-1" controlId="copy">    
                <Form.Label className='me-2 text-secondary'>Request Demo Link :</Form.Label>  
                <div>
                        <Form.Check inline label="Yes" name="req3" type="radio" id="req3" />
                        <Form.Check inline label="No" name="req4" type="radio" id="req4" />
                </div>
                </Form.Group>

              

                <Form.Group as={Col} md="6"  className="mb-3" controlId="formBasicEmail">      
                        <Form.Control className='shadow-sm bg-light border-0' type='text' name="crate" id="crate" placeholder="Rate Of Payment"  />
                </Form.Group>




                </Row>
              



            </Form>
        </Container>
        </>
    );
};

export default StProjectForm3;
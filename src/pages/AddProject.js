import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './../css/global.css';
import './../css/responsive.css';
import CreateProjectForm from '../Components/CreateProjectForm';

const AddProject = () => {

    return (
        <>
        <Container fluid className='uplead_form border-bottom'>
            <Row>
                <Col md={4} xl={4} className="ps-0">
                <div className='form_cover bg-secondary bg-gradient'>
                    <div className='from_stage'>
                        <div className='d-flex justify-content-between align-items-center' style={{position: 'relative', zIndex: '2'}}>
                            <p className='fw-bold text-light mb-0'>Project</p>
                            <span className='d-block text-dark fs-4 bg-white px-3 py-1 shadow rounded-pill'>1</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center' style={{position: 'relative', zIndex: '2'}}>
                            <p className='fw-bold text-light mb-0'>Submission Instruction</p>
                            <span className='d-block text-dark fs-4 bg-white px-3 py-1 shadow rounded-pill'>2</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center' style={{position: 'relative', zIndex: '2'}}>
                            <p className='fw-bold text-light mb-0'>Cast/Crew</p>
                            <span className='d-block text-dark fs-4 bg-white px-3 py-1 shadow rounded-pill'>3</span>
                        </div>


                    </div>
                </div>
                </Col>
                <Col md={12} xl={8} className="pe-0">
                <div className='form_container p-5 rounded-3 shadow-sm bg-white'>
                    {/* <MasterForm /> */}
                    <CreateProjectForm />
                </div>
                </Col>
            </Row>
        </Container>
            
        </>
    );
};

export default AddProject;
import React from 'react';
import { Accordion, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './../css/responsive.css';
import MainSlider from '../Components/Slider';
import movie1 from './../img/movie1.jpeg';
import movie2 from './../img/movie2.jpeg';
import movie3 from './../img/movie3.jpg';
import movie4 from './../img/movie4.jpg';
import movie5 from './../img/movie5.jpeg';

const AllProjects = () => {
    return (
        <>
        <Container fluid className='bg-light all_project px-0'>
            <div className='mb-3'>
                <div className='d-flex justify-content-between pt-4 pb-3 px-4 border-bottom'>
                    <p className='fs-5 text-secondary mb-0'>Projects</p>

                    <div>
                        <button className='btn btn-secondary bg-gradient border-0 btn-sm'> Filter <BiFilterAlt className='mb-1 ' /></button>
                    </div>
                </div>
            </div>
            

        
        <Row className='accordian-items mx-0'>
            <Col xl={3} sm={6} md={4}>
                <div className='bg-white shadow-sm rounded-2'>
                    <div className='border-bottom text-start'>
                        <p className='mb-0 p-2 fs-6 text-secondary ms-2'>Filter By <BiFilterAlt  /></p>
                    </div>

                <div className='p-3'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0" className=''>
                        <Accordion.Header><p className='mb-0 text-secondary fs-5'>Movie Catagory</p></Accordion.Header>
                        
                        <Accordion.Body>
                            <div className=''>
                            <InputGroup className="mb-2 rounded-2 shadow-sm">
                                <InputGroup.Text className='border-0 bg-light' id="basic-addon1"><AiOutlineSearch className='' /></InputGroup.Text>
                                <Form.Control placeholder="Search Movies..." className='border-0 bg-light' aria-label="Search Movies..."  />
                            </InputGroup>
                            </div>

                            <div className='input-groups text-start small'>
                                <Form.Check type="checkbox" id="1" className='text-secondary' label="Action (12)" />
                                <Form.Check type="checkbox" id="2" className='text-secondary' label="Animation (22)" />
                                <Form.Check type="checkbox" id="3" className='text-secondary' label="Comedy (32)" />
                                <Form.Check type="checkbox" id="4" className='text-secondary' label="Advanture (12)" />
                                <Form.Check type="checkbox" id="5" className='text-secondary' label="Cartoon (52)" />
                                <Form.Check type="checkbox" id="6" className='text-secondary' label="Story (142)" />
                                <Form.Check type="checkbox" id="7" className='text-secondary' label="Drama (62)" />
                                <Form.Check type="checkbox" id="8" className='text-secondary' label="Fantacy (22)" />
                                <Form.Check type="checkbox" id="9" className='text-secondary' label="Hestory (112)" />
                                <span className='text-primary load-more'>Load More...</span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header ><p className='mb-0 text-secondary  fs-5'>All Language</p></Accordion.Header>
                        <Accordion.Body className='pt-0'>
                        <div className='input-groups text-start small'>
                                <Form.Check type="checkbox" id="1" className='text-secondary' label="Hendi (72)" />
                                <Form.Check type="checkbox" id="2" className='text-secondary' label="English (122)" />
                                <Form.Check type="checkbox" id="3" className='text-secondary' label="Urdu (32)" />
                                <Form.Check type="checkbox" id="4" className='text-secondary' label="Spanesh (02)" />
                                <Form.Check type="checkbox" id="5" className='text-secondary' label="Bangali (11)" />
                                <Form.Check type="checkbox" id="6" className='text-secondary' label="Panjab (44)" />
                                <span className='text-primary load-more'>Load More...</span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><p className='mb-0 text-secondary fs-5'>Movie Type</p></Accordion.Header>
                        <Accordion.Body className='pt-0'>
                        <div className='input-groups text-start small'>
                                <Form.Check type="checkbox" id="1" className='text-secondary' label="Old" />
                                <Form.Check type="checkbox" id="2" className='text-secondary' label="2D" />
                                <Form.Check type="checkbox" id="3" className='text-secondary' label="3D" />
                                <Form.Check type="checkbox" id="4" className='text-secondary' label="Marrative" />
                                <Form.Check type="checkbox" id="5" className='text-secondary' label="Documentary" />
                                <Form.Check type="checkbox" id="6" className='text-secondary' label="Avant-garde" />
                                <span className='text-primary load-more'>Load More...</span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                
                </div>
            </Col>
            <Col xl={9} sm={6} md={8}>
                <Row className=''>
                        <Col className='my-3 px-0 mx-0' xl={12} md={12} xs={12}>
                            <MainSlider />
                        </Col>

                        <Col md={6} sm={6} xl={3} >
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie1} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie2} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie3} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie3} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4'>
                            <Card.Img variant="top" src={movie2} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie1} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie5} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie4} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col md={6} sm={6} xl={3}>
                            <Link to="project" className="text-decoration-none text-secondary">

                            <Card className='card-width border-0 rounded-3 shadow-sm mx-auto mb-4' >
                            <Card.Img variant="top" src={movie2} />
                            <Card.Body className=' text-start'>
                                <div className='bg-white'>
                                    <p className='text-dark fw-bold mb-1 small'>Thank God -released in 2022</p>
                                    <div className='d-flex justify-content-between'>

                                    <span className='small text-secondary d-block'>Language : <span className='text-info'>Hendi</span></span>
                                    <span className='small text-secondary d-block'> <AiOutlineCalendar className="text-secondary mb-1" /> <span className='text-info'>JUN 15</span></span>
                                    </div>
                                </div>            
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                </Row>
            </Col>
        </Row>

        </Container>
            
        </>
    );
};

export default AllProjects;
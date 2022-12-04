import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { AiFillLinkedin, AiFillPlusCircle, AiOutlineDollarCircle } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagramSquare, FaMoneyBillAlt, FaTwitterSquare } from 'react-icons/fa';
import { FiEdit, FiShare2 } from 'react-icons/fi';
import Caurosel from '../Components/Caurosel';


const Project = () => {
    return (
        <>

       
        <Caurosel/>
        <Container fluid className='bg-light'>

        
        <Container className='pb-5'> 
          <Row>
            <Col xs={12} md={3}>
            <div className='project-profile-container shadow-sm'>

            <div className='mb-4'>
              <img src="https://img.freepik.com/premium-vector/cinema-3d-movie-background-with-popcorn-vintage-film_53562-5483.jpg?w=740" className='img-fluid rounded' alt="project-profile-img" />
            </div>

            <div className='small'>
              <div className='text-start mb-2'>
                <p className='fw-bold text-dark mb-0'>Director</p>
                <span className='small text-secondary'>kavin smith</span>
              </div>
              <div className='text-start mb-2'>
                <p className='fw-bold text-dark mb-0'>Writers</p>
                <span className='small text-secondary'>kavin, Shawn, kofolin, mack lg etc</span>
              </div>
              <div className='text-start mb-2'>
                <p className='fw-bold text-dark mb-0'>Cast</p>
                <span className='small text-secondary'>rayn studor, moris jonson</span>
              </div>
              <div className='text-start mb-2'>
                <p className='fw-bold text-dark mb-0'>Plot</p>
                <span className='small text-secondary'>Peter parker & his friend gose in a summer trip to Europe. However they are hardly be able to rest - Peter</span>
              </div>
             
            </div>

            </div>
              
            </Col>
            <Col xs={12} md={9}>
            <div className='project-social-container shadow-sm'>

              <div className='d-flex justify-content-between'>
                <p className='mb-0 fs-4 fw-bold'>project-profile-container shadow</p>
                <div>
              <button className='btn btn-sm btn-info me-2'><span><FiShare2 className='mb-1'/></span></button>
              <button className='btn btn-sm btn-dark'>Add To WathcList <span><AiFillPlusCircle className='mb-1' /></span></button>
              
                </div>
              </div>

              <hr/>
              <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center '>
                  <p className='mb-0 fs-6 me-1'><FaMoneyBillAlt /> Buget - </p>
                  <button className='btn btn-sm btn-dark bg-gradient px-3'><AiOutlineDollarCircle className='mb-1' /> 1,60,000</button>
                </div>

                <div>
                    <span><FaFacebookSquare className='mb-1 me-2 fs-4 text-primary'/></span>
                    <span><FaInstagramSquare className='mb-1 me-2 fs-4 text-danger'/></span>
                    <span><FaTwitterSquare className='mb-1 me-2 fs-4 text-info'/></span>
                    <span><AiFillLinkedin className='mb-1 me-2 fs-3 text-primary'/></span>
                </div>

            </div>
            </div>

            <div className='project-detail-container rounded-3 shadow-sm'>

                    <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="1" title="Cast">
                <div>

                <div className='d-flex justify-content-between border-bottom pb-2'> 
                  <p className='text-secondary fs-5 mb-0'>People</p>
                  <button className='btn btn-sm btn-dark'><FiEdit className='mb-1' /></button>
                </div>

                <Row className='mt-3'>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Andrew Smith</p>
                        <span className='text-secondary small small'>Actor</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Annny</p>
                        <span className='text-secondary small small'>Actor</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4139/4139981.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Eren Yeagor</p>
                        <span className='text-secondary small small'>Actor</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140040.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Sasah</p>
                        <span className='text-secondary small small'>Actor</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                </div>
              </Tab>

              <Tab eventKey="2" title="Crew">
                <div>
                <div className='d-flex justify-content-between border-bottom pb-2'> 
                  <p className='text-secondary fs-5 mb-0'>Crew Members</p>
                  <button className='btn btn-sm btn-dark'><FiEdit className='mb-1' /></button>
                </div>

                <Row className='mt-3'>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Kavin Smith</p>
                        <span className='text-secondary small small'>Director</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140040.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Sasha gorge</p>
                        <span className='text-secondary small small'>Writter</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Anthony</p>
                        <span className='text-secondary small small'>Producer</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Anny</p>
                        <span className='text-secondary small small'>Composser</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className='d-flex flex-start my-2 align-items-center'>
                      <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" className='cast-people me-3' alt="" />
                      <div className='text-start small'>
                        <p className='text-secondary fw-bold mb-0'>Sam carl</p>
                        <span className='text-secondary small small'>1" AD</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                </div>
              </Tab>


              <Tab eventKey="3" title="Overview">
              <div>
                <div className='d-flex justify-content-between border-bottom pb-2'> 
                  <p className='text-secondary fs-5 mb-0'>Project Overview</p>
                  <button className='btn btn-sm btn-dark'><FiEdit className='mb-1' /></button>
                </div>

                <Row className='mt-3'>
                  <Col md={6} sm={12} className="border-end">
                    <div className='text-start'>
                      <div className='text-start small'>
                        <p className='text-dark fw-bold mb-1'>New Year Eva of the water Fall</p>
                        <span className='text-secondary small'>Astronauts who have seen the Earth from an experience that has of the planet and mankind's place upon it, and enabled them to perceive it as our shared home, without boundaries between nations or species.</span><br/><br/>
                        <span className='text-secondary small'> The film also features insights from commentators and thinkers on the wider implications and importance of this understanding for humanity as a whole, and especially its relevance to at this time.

                      <br/>—Anonymous</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                      <div className='small'>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Tags</p>
                        <span className='small text-info'>Leadership, OverComing, Tribal</span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Location</p>
                        <span className='small text-secondary'>Shotting : <span className='text-info'>Pencelvania</span></span><br/>
                        <span className='small text-secondary'>Casting : <span className='text-info'>Netherland</span></span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Date</p>
                        <span className='small text-secondary'>Casting/Interviews: <span className='text-info'>Jan 12, 2021 to Feb 7, 2021</span></span><br/>
                        <span className='small text-secondary'>OutSide Dates: <span className='text-info'>March 12, 2021 to April 7, 2021</span></span><br/>
                      </div>
                      </div>
                  </Col>
                  
                  
                </Row>
                </div>
              </Tab>



              <Tab eventKey="4" title="Submission">  

                <div className='d-flex justify-content-between border-bottom pb-2'> 
                  <p className='text-secondary fs-5 mb-0'>Project Submission</p>
                  <button className='btn btn-sm btn-dark'><FiEdit className='mb-1' /></button>
                </div>

                <Row className='mt-3'>
                  <Col md={6} sm={12} className="border-end">
                  <div className='small'>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Tags</p>
                        <span className='small text-info'>Leadership, OverComing, Tribal</span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Location</p>
                        <span className='small text-secondary'>Shotting : <span className='text-info'>Pencelvania</span></span><br/>
                        <span className='small text-secondary'>Casting : <span className='text-info'>Netherland</span></span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Date</p>
                        <span className='small text-secondary'>Casting/Interviews: <span className='text-info'>Jan 12, 2021 to Feb 7, 2021</span></span><br/>
                        <span className='small text-secondary'>OutSide Dates: <span className='text-info'>March 12, 2021 to April 7, 2021</span></span><br/>
                      </div>
                      </div>
                  </Col>
                  <Col md={6} sm={12}>
                      <div className='small'>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Tags</p>
                        <span className='small text-info'>Leadership, OverComing, Tribal</span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Location</p>
                        <span className='small text-secondary'>Shotting : <span className='text-info'>Pencelvania</span></span><br/>
                        <span className='small text-secondary'>Casting : <span className='text-info'>Netherland</span></span>
                      </div>
                      <div className='text-start mb-2'>
                        <p className='fw-bold text-dark mb-0'>Date</p>
                        <span className='small text-secondary'>Casting/Interviews: <span className='text-info'>Jan 12, 2021 to Feb 7, 2021</span></span><br/>
                        <span className='small text-secondary'>OutSide Dates: <span className='text-info'>March 12, 2021 to April 7, 2021</span></span><br/>
                      </div>
                      </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
            </div>
             
             
             
            </Col>
          </Row>
        </Container>
        </Container>
          
        </>
    );
};

export default Project;
import React, { useState } from 'react';
import {Button, Col, Container, Form, InputGroup, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { AiFillLinkedin, AiFillPlusCircle, AiOutlineAppstoreAdd, AiOutlineCalendar, AiOutlineDelete, AiOutlineInfoCircle, AiOutlineLogout, AiOutlinePhone } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaEdit, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import {CiLocationOn} from 'react-icons/ci';
import {Gi3DGlasses} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Modals from '../Components/Modals';
import ReactAudioPlayer from 'react-audio-player';




const Profile = () => {

    const [showProfile, setShowProfile] = useState(false);
    const [audioPlay, setAudioPlay] = useState(false);

    
    
   


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Change Photo
        </Tooltip>
      );




    return (
        <>
        <Container fluid className='profile_bg bg-light p-0'>
            <div className='profile_header'>
                <Container>
                    <div className='d-flex justify-content-between align-items-center pt-4'>
                    
                    <p className='fs-1 fw-bold text-secondary'>Ms. Admin</p>
                   
                    <div> 
                    <button className='btn btn-secondary border-0 bg-gradient'><AiOutlineLogout /> Log Out</button>
                    </div>
                    </div>
                </Container>
            </div>

            <Container className='pb-5'> 
            <Row>
                <Col xs={12} md={3}>
                <div className='profile-container shadow-sm'>

                    <div className='mb-4'>
                        <img src="https://www.wlcglobal.org/application/files/7216/4304/3628/Stephanie_Azzi_Square.png" className='img-fluid rounded' alt="project-profile-img" />
                        
                        <div className='profile-edit'>
                                <OverlayTrigger placement="left" delay={{ show: 150, hide: 400 }} overlay={renderTooltip} >
                            <span>
                            <AiFillPlusCircle className='text-dark fs-1 shadow rounded-pill' />

                            </span>
                                </OverlayTrigger>
                        </div>
                    </div>
                

                <div className='text-start'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <p className='fw-bold text-dark mb-0'>Personal Info</p>
                        <button className='btn btn-default bg-gradient' onClick={() => setShowProfile(true)}><FaEdit className='fs-5 mb-1' /></button>
                    </div>

                    <div className='d-flex align-items-center mb-2'>
                        <span><BiUserCircle className='me-1' /></span>                   
                        <span className='small text-secondary me-1'>Known For - </span>
                        <span className='small text-secondary'> Acting</span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                        <span><BsGenderAmbiguous className='me-1' /></span>
                        <span className='small text-secondary me-1'>Gender - </span>
                        <span className='small text-secondary '> Male</span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                        <span><Gi3DGlasses className='me-1' /></span>
                        <span className='small text-secondary me-1'>Credit - </span>
                        <span className='small text-secondary '> 320</span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                        <span><AiOutlineCalendar className='me-1' /></span>                    
                        <span className='small text-secondary me-1'>Birth Date - </span>
                        <span className='small text-secondary'> 12/12/1990</span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                        <span><CiLocationOn className='me-1' /></span>                   
                        <span className='small text-secondary me-1'>Known For - </span>
                        <span className='small text-secondary'> Acting</span>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mb-2'>
                        <span><AiOutlineInfoCircle className='me-1' /></span>                   
                        <span className='small text-secondary me-1'>More at - </span>
                        <span className='small text-secondary'> <Link to="/" className='text-decoration-none'>IMDT</Link> </span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                        <span><AiOutlinePhone className='me-1' /></span>                   
                        <span className='small text-secondary me-1'>Contact Info - </span>
                        <span className='small text-secondary'> <Link to="/" className='text-decoration-none'>Agent</Link> </span>
                    </div>
                </div>

                </div>
                
                </Col>



                {/*------------ personal info modal ---------------- */}

                <Modals showModal={showProfile} setShowModal={setShowProfile} heading="Edit Personal Info" btnText="Add Info" >
                <Container>
                    <div className='d-flex align-items-center justify-content-between  mb-2'>
                        <div><span><BiUserCircle className='me-1' /></span><span className='text-secondary me-1'>Known For - </span></div>
                        <div>
                        <InputGroup >
                            <Form.Control type='text' placeholder="Type Hare" className='border-0 shadow-sm' />
                            <Button className='btn btn-sm btn-secondary bg-gradient border-0' id="button-addon2">Update</Button>
                        </InputGroup>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between  mb-2'>
                        <div><span><BsGenderAmbiguous className='me-1' /></span><span className='small text-secondary me-1'>Gender - </span></div>
                        <div>
                        <InputGroup >
                            <Form.Control type='text' placeholder="Type Hare" className='border-0 shadow-sm' />
                            <Button className='btn btn-sm btn-secondary bg-gradient border-0' id="button-addon2">Update</Button>
                        </InputGroup>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between  mb-2'>
                        <div><span><Gi3DGlasses className='me-1' /></span><span className='text-secondary me-1'>Credit - </span></div>
                        <div>
                        <InputGroup >
                            <Form.Control type='number' placeholder="Type Hare" className='border-0 shadow-sm' />
                            <Button className='btn btn-sm btn-secondary bg-gradient border-0' id="button-addon2">Update</Button>
                        </InputGroup>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between  mb-2'>
                        <div><span><AiOutlineCalendar className='me-1' /></span><span className='text-secondary me-1'>Date of Birth - </span></div>
                        <div>
                        <InputGroup >
                            <Form.Control type='date' placeholder="Type Hare" className='px-4 border-0 shadow-sm' />
                            <Button className='btn btn-sm btn-secondary bg-gradient border-0' id="button-addon2">Update</Button>
                        </InputGroup>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between  mb-2'>
                        <div><span><BiUserCircle className='me-1' /></span><span className='text-secondary me-1'>Known For - </span></div>
                        <div>
                        <InputGroup >
                            <Form.Control type='text' placeholder="Type Hare" className='border-0 shadow-sm' />
                            <Button className='btn btn-sm btn-secondary bg-gradient border-0' id="button-addon2">Update</Button>
                        </InputGroup>
                        </div>
                    </div>
                        
                    </Container>
                </Modals>

               
                {/*--------------- personal info modal -----------------  */}


                {/* ------------------ audio upload modal -----------------  */}
                <Modals showModal={audioPlay} setShowModal={setAudioPlay} heading="Edit & Add audio">
                        <Container>
                            <div className='d-flex justify-content-between align-items-center'>
                            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
                            <button className='btn btn-sm btn-secondary bg-gradient rounded-pill'> Delete <AiOutlineDelete className='mb-1' /></button>
                            </div>
                            <hr/>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
                            <button className='btn btn-sm btn-secondary bg-gradient rounded-pill'> Delete <AiOutlineDelete className='mb-1' /></button>
                            </div>
                        
                        </Container>

                        <Modal.Footer>
                            <Container> 
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <Form.Group controlId="formFileSm">
                                            <Form.Control type="file" size="sm" />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Button className='btn btn-sm btn-secondary bg-gradient border-0 '> Add <AiFillPlusCircle className='ms-1 mb-1' /></Button>
                                    </div>
                                </div>
                            </Container>
                        </Modal.Footer>
                </Modals>

              































                <Col xs={12} md={9}>

                <div className='profile-detail-container rounded-3 shadow-sm'>

                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-default bg-gradient'><FaEdit className='fs-4 mb-1' /> </button>
                        <div>
                            <span><FaFacebookSquare className='mb-1 me-2 fs-4 text-primary'/></span>
                            <span><FaInstagramSquare className='mb-1 me-2 fs-4 text-danger'/></span>
                            <span><FaTwitterSquare className='mb-1 me-2 fs-4 text-info'/></span>
                            <span><AiFillLinkedin className='mb-1 me-2 fs-3 text-primary'/></span>
                        </div>
                    </div>
                            <hr/>
                    <div className='text-start'>
                        <p className='fs-5 text-dark fw-bold mb-1'>BioGraphy</p>
                        <span className='text-secondary small'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dignissimos officiis tempora, quia sit, officia distinctio ducimus Doloremque aliquid tempore sunt quaerat omnis adipisci exercitationem! Perferendis at tempora laboriosam fuga deleniti rerum, obcaecati hic eos nihil optio nam! Explicabo dolorem id obcaecati sint a vitae maxime earum, voluptate aspernatur necessitatibus. Nam cum reprehenderit magni eos adipisci iusto, temporibus optio a quam! Reiciendis minima ad consectetur esse ex, vel molestiae, eligendi quibusdam enim officia ut consequuntur deleniti repellat omnis recusandae ea!</span>
                    </div>
                </div>

                <div className='mt-2'>
                        <Row>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Rells - <span className='text-secondary'>(12)</span></p>
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient'><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Rells</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Audio - <span className='text-secondary'>(02)</span></p>
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient' onClick={() => setAudioPlay(true)} ><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Audio</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Video - <span className='text-secondary'>(05)</span></p>
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient'><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Video</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Event - <span className='text-secondary'>(02)</span></p>
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient'><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Rells</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Project - <span className='text-secondary'>(22)</span></p>
                                        <Link className='' to="/addproject">
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient'><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Project</button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className='shadow-sm bg-white my-2 p-3 rounded-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='mb-0 text-dark'>Total Person - <span className='text-secondary'>(112)</span></p>
                                        <button className='btn btn-sm btn-secondary border-0 bg-gradient'><AiOutlineAppstoreAdd className='me-2 mb-1' />  Add Person</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                </div>
                
                
                
                </Col>
            </Row>
            </Container>
     

        </Container>
            
        </>
    );
};

export default Profile;
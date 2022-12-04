import React from 'react';
import {Modal } from 'react-bootstrap';

const Modals = ({heading, btnText, showModal, setShowModal, children}) => {

    

    const ModalClose = () => setShowModal(false);


    
    return (
        <>
        <Modal
                show={showModal}
                onHide={ModalClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='border-0'>
                    {heading} 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                        {children}
                </Modal.Body>
                
                </Modal>
        </>
    );
};

export default Modals;
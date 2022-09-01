import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import modal from './modal.css'

function Team() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [website, setWebsite] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;



        if (inputType === 'name') {
            setName(inputValue);
            return;
        } else if (inputType === 'address') {
            setAddress(inputValue);
            return;
        } else if (inputType === 'website') {
            setWebsite(inputValue);
            return;
        }
    };

    const handleBlur = (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'name') && (!inputValue.length)) {
            setErrorMessage('Please enter a team name')
            console.log(setErrorMessage)
        }
        if ((inputType === 'address') && (!inputValue.length)) {
            setErrorMessage('Please include your company')
            console.log(setErrorMessage)
        }
        if ((inputType === 'website') && (!inputValue.length)) {
            setErrorMessage('Please include a link for your website')
            console.log(setErrorMessage)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setAddress('');
        setWebsite('');
        setErrorMessage('');
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Team
            </Button>

            <Modal className={modal} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='textbox'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={name} className='info' onChange={handleChange} onBlur={handleBlur}>Add your Team name</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Team Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={address} className='info' onChange={handleChange} onBlur={handleBlur}>Add your Company Address</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Address"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={website} className='info' onChange={handleChange} onBlur={handleBlur}>Add a Link to your Website</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="website@example.com"
                                autoFocus
                            />

                        </Form.Group>
                        <div>
                            {errorMessage && (<div className="error-text">{errorMessage}</div>)}
                        </div>
                        <Modal.Footer className='buttons'>
                            <Button className='button-close' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='button-save' variant="primary" onClick={handleClose} onSubmit={handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Team;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import modal from './modal.css';
import { CollapsibleLabelDivider, LabelDivider } from "mui-label-divider";


function Member() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
            return;
        } else if (inputType === 'position') {
            setPosition(inputValue);
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
        if ((inputType === 'position') && (!inputValue.length)) {
            setErrorMessage('Please include your company')
            console.log(setErrorMessage)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setPosition('');
        setErrorMessage('');
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a Team Member
            </Button>
            <Modal className={modal} show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form className='textbox'>
                        <Form.Group  controlId="exampleForm.ControlInput1">
                            <Form.Label value={name} className='team-info' onChange={handleChange} onBlur={handleBlur}>Add a Team Member</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group  controlId="exampleForm.ControlInput1">
                            <Form.Label value={position} className='team-info' onChange={handleChange} onBlur={handleBlur}>Add a Position</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Position"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>
                                Add Business Card Informtaion

                                    <Form.Control className='additional-input'
                                        type="text"
                                        placeholder="Email"
                                        autoFocus
                                    />
                                    <Form.Control className='additional-input'
                                        type="text-box"
                                        placeholder="Phone Number"
                                        autoFocus
                                    />
                                    <div className='collapse'>
                                    Additional Information
                                <CollapsibleLabelDivider 
                                    label={`${open ? "CLOSE" : "EXPAND"} `}
                                    open={open}
                                    onClick={() => setOpen((x) => !x)}
                                >
                                    <Form.Control className='input'
                                        type="text"
                                        placeholder="Business Hours"
                                        autoFocus
                                    />
                                    <Form.Control className='input'
                                        type="text"
                                        placeholder="Business Hours"
                                        autoFocus
                                    />
                                </CollapsibleLabelDivider>
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <div>
                            {errorMessage && (<div className="error-text">{errorMessage}</div>)}
                        </div>
                        <Modal.Footer className='buttons '>
                        <Button className='button-save btn btn-light m-2' variant="primary" onClick={handleClose} onSubmit={handleSubmit}>
                                Add Member
                            </Button>
                            <Button className='button-close btn btn-danger m-2' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Member;
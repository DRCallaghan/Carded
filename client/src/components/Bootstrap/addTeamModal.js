import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ADD_TEAM } from '../../utils/mutations';
import modal from './modal.css'


function Team() {
    const [show, setShow] = useState(false);
    const [addTeam, {error, data }] = useMutation(ADD_TEAM)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formState, setFormState] = useState({ name: '', address: '', website: ''})
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target

        setFormState({
            ...formState,
            [name]: value,
        })

    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState)
        try {
             await addTeam({
                variables: { ...formState}
            })
        } catch (e) {
            console.error(e)
        }
        navigate('/team')

       setFormState({
        name: '',
        email: '',
        website: '',
        })
        setErrorMessage('');
    }

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

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Team
            </Button>
            <Modal className={modal} show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className='textbox'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={formState.name} className='info' onChange={handleChange} onBlur={handleBlur}>Add your Team name</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Team Name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={formState.address} className='info' onChange={handleChange} onBlur={handleBlur}>Add your Company Address</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Address"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label value={formState.website} className='info' onChange={handleChange} onBlur={handleBlur}>Add a Link to your Website</Form.Label>
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
                            <Button className='button-close btn btn-danger m-2' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='button-save btn btn-light m-2' variant="primary" onClick={handleClose} onSubmit={handleSubmit}>
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
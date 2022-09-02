import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ADD_TEAM } from '../../utils/mutations';
import Auth from '../../utils/auth';


function Team() {
    // state variables for whether to show the modal or close it
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // addTeam mutation
    const [addTeam, { error, data }] = useMutation(ADD_TEAM);
    // form state variables for data management for the mutation
    const [formState, setFormState] = useState({ name: '', address: '', website: '' });
    // error message state variables
    const [errorMessage, setErrorMessage] = useState('')

    // handle change function for the form inputs and their state values
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // defining the team manager ID based on the current user creating the team
    const managerId = Auth.getProfile().data._id;

    // handle submit function for the new team using the addTeam mutation
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTeam({
                variables: {
                    ...formState,
                    managerId: managerId
                }
            });
        } catch (e) {
            console.error(e);
        };
    };

    // handle blur function to display error messages in case the user navigates to another app while inputting data
    const handleBlur = (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'name') && (!inputValue.length)) {
            setErrorMessage('Please enter a team name');
            console.log(setErrorMessage);
        }
        if ((inputType === 'address') && (!inputValue.length)) {
            setErrorMessage('Please include your company');
            console.log(setErrorMessage);
        }
        if ((inputType === 'website') && (!inputValue.length)) {
            setErrorMessage('Please include a link for your website');
            console.log(setErrorMessage);
        }
    };

    // returning the add team button which displays the modal with form inside
    return (
        <>
            <Button variant="btn btn-md btn-light m-2" onClick={handleShow}>
                Add Team
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form className='textbox'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Add your Team name</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='name'
                                placeholder="Team Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Add your Company Address</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='address'
                                placeholder="123 Main Street"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.address}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='info'>Add a Link to your Website</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                name='website'
                                placeholder="example.com"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={formState.website}
                            />

                        </Form.Group>
                        <div>
                            {errorMessage && (<div className="error-text">{errorMessage}</div>)}
                        </div>
                        <Modal.Footer className='buttons'>
                            <Button className='button-close btn btn-danger m-2' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='button-save btn btn-light m-2' variant="primary" onClick={handleSubmit}>
                                <Link to="/team">Save Changes</Link>
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Team;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import modal from './modal.css';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_MEMBER } from '../../utils/mutations';
import { QUERY_PROFILE_BY_NAME } from '../../utils/queries';
import { CollapsibleLabelDivider, LabelDivider } from "mui-label-divider";
import Auth from '../../utils/auth';
import SearchMember from  './searchMember'

function Member() {
    // state variables for whether to show the modal or close it
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addMember, { error, data }] = useMutation(ADD_MEMBER);
    const [formState, setFormState] = useState({ name: '', position: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        if ((name === 'name') && (!value.length)) {
            setErrorMessage("Please enter your team member's full name.");
            console.log(setErrorMessage);
        };
        if ((name === 'position') && (!value.length)) {
            setErrorMessage("Please enter your team member's position.");
            console.log(setErrorMessage);
        };
    };

    const team = JSON.parse(localStorage.getItem('team'));
    const teamId = team[0]._id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addMember({
                variables: {
                    ...formState,
                    teamId: teamId
                }
            });
        } catch (e) {
            console.error(e);
        };
    };

    const useSearch = async (e) => {
        useQuery(
            QUERY_PROFILE_BY_NAME,
            {
                variables: { profileName: formState.name }
            }
        );
    };

    const styles = {
        textStyle:{
            color: 'red',
            fontSize: 'large'
        }
    }

    return (
        <>
            <Button className="btn btn-md btn-light m-2" onClick={handleShow}>
                Add a Team Member
            </Button>
            <Modal className={modal} show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form className='textbox'>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className='team-info'>Add a Team Member</Form.Label>
                            <SearchMember placeholder= 'Member name' data={ADD_MEMBER}/>
                            {/* MOVED TO SEARCHMEMBER.JS */}
                            {/* <Form.Control className='input'
                                type="text"
                                placeholder="Member Name"
                                autoFocus
                                value={formState.name}
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            /> */}  
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className='team-info'>What is their position?</Form.Label>
                            <Form.Control className='input'
                                type="text"
                                placeholder="Position"
                                autoFocus
                                value={formState.position}
                                name='position'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <div className='collapse'>
                                <Form.Label className='team-info'>Additional Information</Form.Label>
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
                        </Form.Group>
                        <div style={styles.textStyle}>
                            {errorMessage && (<div className="error-text">{errorMessage}</div>)}
                        </div>
                        <Modal.Footer className='buttons '>
                            <Button className='button-save btn btn-light m-2' variant="primary" onClick={handleSubmit}>
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
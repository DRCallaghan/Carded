import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import modal from './modal.css'

        //        FOR TEAM SEARCH BELOW
        // import Teams from '../Teams';
        // import { QUERY_SINGLE_TEAM } from '../../utils/queries';

function SearchModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

          //          FOR TEAM SEARCH BELOW
          // const { loading, data } = useQuery(QUERY_SINGLE_TEAM);
          // const teams = data?.teams || [];
          // not sure how after this search occurs that the same data goes to the profile page to be rendered...


  return (
    <>
      <Button className='btn btn-light m-2' variant="primary" onClick={handleShow}>
        Search for a Team
      </Button>
      <Modal className={modal} show={show} onHide={handleClose}>
        <Modal.Body>
          <Form className='textbox'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='info'>Search for a Team</Form.Label>
              <Form.Control className='input'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Modal.Footer className='buttons'>
              <Button className='button-close btn btn-danger m-2' variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className='button-save btn btn-light m-2' variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
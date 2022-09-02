import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Team from './addTeamModal';

function Drop() {
    return (
        
        <DropdownButton className='btn-light m-2' align="end"title="Team Pages"id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1"><Team/></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
    );
}


export default Drop;

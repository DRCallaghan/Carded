import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import Team from './addTeamModal';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Drop() {
    const { profileId } = useParams();

    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(
        profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
        {
            variables: { profileId: profileId },
        }
    );
    // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
    // const profile = data?.me || data?.profile || {};

    //     // const styles= {
    //     //     dividerPadding:{
    //     //         paddingBottom:'20px'
    //     //     }
    //     // }

    return (
        <DropdownButton className='btn-dropdown m-2' variant='btn btn-md btn-light m-2' align="end" title="My Teams" id="dropdown-menu-align-end">
            <Dropdown.Item  eventKey="1"></Dropdown.Item>
            
            <Dropdown.Divider />
            
            <Dropdown.Item  eventKey="4">
                <p>Add a Team</p>
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default Drop;

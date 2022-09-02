import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Team from './addTeamModal';
import { Link, useParams } from 'react-router-dom';
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
    const profile = data?.me || data?.profile || {};
    return (
        <DropdownButton className='btn-dropdown m-2' align="end" title="Team Pages" id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1"><Team /></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">{profile.team[0] ? (
                <Link to="/team">{profile.team[0].name}</Link>
            ) : (
                <p>Add a team above!</p>
            )}
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default Drop;

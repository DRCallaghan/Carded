import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import CardExample from '../components/Bootstrap/card';
import Drop from '../components/Bootstrap/dropdown';
import HomeFooter from '../components/Footer/homefoot';
import SearchModal from '../components/Bootstrap/searchModal';
import Header from "../components/Header";
import Auth from '../utils/auth';

const TeamPage = () => {
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
    // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to="/profiles" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile?.team) {
        return (
            <h4>
                You must be part of a team to view the team page! You can either find a team you are currently part of or add your own team on your profile page.
            </h4>
        );
    }

    return (
        <div>
            <Header />

            <div>
                <CardExample />
            </div>

            <HomeFooter />
        </div>
    );
};

export default TeamPage;
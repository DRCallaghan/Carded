import React from 'react';
import { BrowserRouter, Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import CardExample from '../components/Bootstrap/card';
import Drop from '../components/Bootstrap/dropdown';
import Footer from '../components/Footer';
import SearchModal from '../components/Bootstrap/searchModal';
import Header from "../components/Header";
import Auth from '../utils/auth';
import Member from '../components/Bootstrap/addMemberModal';
import Profile from './Profile'

const TeamPage = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
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
        return <Navigate to="/team" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const team = profile.team;
    if (!team[0]?.name) {
        return (
            <div>
                <Header />
                <div className="flex-row justify-center">
                    <div className="col-12 col-md-10 my-3 text-center">
                        <h4>
                            You must be part of a team to view the team page! You can either find a team you are currently part of or add your own team on your profile page.
                        </h4>
                    </div>
                </div>
            </div>
        );
    }




    return (
        <div>
            <nav className='header'>
                <Link className="btn btn-md btn-light m-2" to='/profiles'>
                    Back to Profile
                    </Link>
                <button className="btn btn-md btn-light m-2" onClick={logout}>
                    Logout
                </button>
                <div className='m-2'>
                <Member />
                </div>
            </nav>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">

                </div>
            </div>

            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3 text-center">
                    <h1>{team[0].name}</h1>
                </div>
                <div className="col-12 col-md-10 my-3 text-left">
                    <h3>{team[0].address}</h3>
                </div>
                <div className="col-12 col-md-10 my-3 text-right">
                    <h3>{team[0].website}</h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TeamPage;
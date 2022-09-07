import React from 'react';
import { BrowserRouter, Link, Navigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import CardExample from '../components/Bootstrap/card';
import Drop from '../components/Bootstrap/dropdown';
import SearchModal from '../components/Bootstrap/searchModal';
import Header from "../components/Header";
import Auth from '../utils/auth';
import Member from '../components/Bootstrap/addMemberModal';
import Profile from './Profile'
import HomeFooter from '../components/Footer/homefoot'
import { Container, Button } from 'react-bootstrap';
import MemberCard from '../components/Bootstrap/memberCard';
import { REMOVE_MEMBER } from '../utils/mutations';



const TeamPage = () => {
    const styles = {
        navbarStyle: {
            background: 'linear-gradient(20deg, #14397d, #77b5d9, #d7eaf3, #d7eaf3, #77b5d9, #14397d)',
            height: '10vh',
            width: '100%',
            position: 'sticky',
            top: '0',
            boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
            zIndex: '400'

        },
        headerStyle: {
            background: '#d7eaf3',
            paddingBottom: '5px'
        },
        paddingStyle: {
            background: "#77b5d9",
            height: '1vh',
            width: '100%',
            marginBottom: '18px'
        }
    }

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

    const team = profile.team;
    localStorage.setItem('team', JSON.stringify(team));

    // defining the mutation to connect the button to remove oneself from a team to that backend route
    const [removeSelf] = useMutation(REMOVE_MEMBER);
    const handleRemove = async (e) => {
        e.preventDefault();
        try {
            await removeSelf({
                variables: {
                    teamId: team[0]._id,
                    profileId: profile._id
                }
            });
            <Navigate to="/profiles" />
        } catch (error) {
            console.error(e);
        }
    }

    // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to="/team" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!team[0]?.name) {
        return (
            <div>
                <Header />
                <div className="flex-row justify-center">
                    <div className="col-12 col-md-10 my-3 text-center">
                        <h4>
                            Loading your team...
                        </h4>
                        <p>If your team does not load, there was an error. Please go back to your profile and try again.</p>
                        <Button className='button-save btn btn-light m-2' variant="primary">
                            <Link style={styles.buttonStyle} to="/profiles">My Profile</Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    return (

        <div>
            <nav style={styles.navbarStyle} className='header justify-center'>
                <Link className="btn btn-md btn-light m-2" to='/profiles'>
                    Back to Profile
                </Link>
                <button className="btn btn-md btn-light m-2 justify-center" onClick={logout}>
                    Logout
                </button>
                <button className="btn btn-md btn-danger m-2 justify-center" onClick={handleRemove}>
                    Remove Me from Team
                </button>
                <div className='m-2'>
                    <Member />
                </div>
            </nav>
            {/* <div className="flex-row justify-center">
                <div className="col-12 col-lg-10 my-3">

                </div>
            </div> */}
            <div style={styles.headerStyle} className="flex-row justify-center header-style">
                <div className="col-12 col-md-10 my-3 text-center">
                    <h2 style={styles.nameStyle}>{team[0].name}</h2>
                </div>
                <div className="text-center2">
                    <h5>{team[0].address}</h5>
                    <h5>{team[0].website}</h5>
                </div>
            </div>
            <div style={styles.paddingStyle}>
            </div>
            <MemberCard managerText='Carded is your virtual business card solution!' memberText='Carded is your virtual business card solution!' />
            <div></div>
            <HomeFooter />
        </div>
    );
};

export default TeamPage;
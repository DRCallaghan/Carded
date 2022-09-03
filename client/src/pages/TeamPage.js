import React from 'react';
import { BrowserRouter, Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import CardExample from '../components/Bootstrap/card';
import Drop from '../components/Bootstrap/dropdown';
import SearchModal from '../components/Bootstrap/searchModal';
import Header from "../components/Header";
import Auth from '../utils/auth';
import Member from '../components/Bootstrap/addMemberModal';
import Profile from './Profile'
import HomeFooter from '../components/Footer/homefoot'
import { Container } from 'react-bootstrap';

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
    localStorage.setItem('team', JSON.stringify(team));
    // if (!team[0]?.name) {
    //     return (
    //         <div>
    //             <Header />
    //             <div className="flex-row justify-center">
    //                 <div className="col-12 col-md-10 my-3 text-center">
    //                     <h4>
    //                         You must be part of a team to view the team page! You can either find a team you are currently part of or add your own team on your profile page.
    //                     </h4>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

const styles = {
    navbarStyle:{
        background: '#14397d',
      height: '10vh',
      width: '100%',
      position: 'sticky',
      top: '0',
      boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',

    },
    headerStyle:{
     background: '#d7eaf3'
    },
    paddingStyle:{
        background: "#77b5d9",
        height: '2vh',
        width: '100%',
        marginBottom: '18px'
    }
}


    return (
        <div>
            <nav style={styles.navbarStyle} className='header'>
                <Link  className="btn btn-md btn-light m-2" to='/profiles'>
                    Back to Profile
                </Link>
                <button className="btn btn-md btn-light m-2" onClick={logout}>
                    Logout
                </button>
                <div className='m-2'>
                    <Member />
                </div>
            </nav>
            {/* <div className="flex-row justify-center">
                <div className="col-12 col-lg-10 my-3">

                </div>
            </div> */}
            <div style={styles.headerStyle} className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3 text-center">
                    <h1>{team[0].name}</h1>
                </div>
                <div className="flex-row justify-content my-3 text-left">
                    <h4 className='col-12'>{team[0].address}</h4>
                </div>
                <div className="flex-row justify-content my-3 text-right">
                    <h4 className='col-12'>{team[0].website}</h4>
                </div>
            </div>
            <div style={styles.paddingStyle}>

            </div>
            <Container>
               <div>
                <CardExample/>
               </div>
            </Container>
            <div style={styles.paddingStyle}>

            </div>
            <Container>
                 <div>
                <CardExample/>
               </div>
            </Container>
            <HomeFooter/>
        </div>
    );
};

export default TeamPage;
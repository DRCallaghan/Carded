import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PhoneList from '../components/PhoneList';
import PhoneForm from '../components/PhoneForm';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import CardExample from '../components/Bootstrap/card';
import Drop from '../components/Bootstrap/dropdown';
import Footer from '../components/Footer';
import SearchModal from '../components/Bootstrap/searchModal';
import BackButton from '../components/Bootstrap/backButton';
import Team from '../components/Bootstrap/addTeamModal';



//        FOR TEAM SEARCH BELOW
        // import Teams from '../Teams';
        // import { QUERY_SINGLE_TEAM } from '../../utils/queries';




const Profile = () => {
  const { profileId } = useParams();

  //        FOR TEAM SEARCH BELOW
  // const { teamName } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  //Set up logout button to send the user back to the homepage after signing out
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  // const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/profiles" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!profile?.name) {
  //   return (
  //     <div className="flex-row justify-center">
  //       <div className="col-12 col-md-10 my-3"></div>
  //       <h4>
  //         Email or password not found! Use the navigation links above to sign up or log in!
  //       </h4>
  //     </div>
  //   );
  // }

  const styles = {
    navbar: {
      // background: '#d7eaf3',
      height: '10vh',
      // width: '100%',
      // position: 'sticky',
      // top: '0',
      // boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
    },
    cardSection: {
      paddingTop: '20vh'
    },
    goBack: {
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'space-between'

    }
  }

  return (
    <div>
      <div>
        <nav style={styles.navbar} className='header'>
          <div>
            <SearchModal />
            <Team />
          </div>
          <button className="btn btn-md btn-light m-2" onClick={logout}>
            Logout
          </button>
          <Drop />
        </nav>
        <div style={styles.cardSection}>
          <CardExample />
        </div>
      </div>
      {/* {profile.phoneNumber?.length > 0 && (
        <PhoneList
          phone={profile.phoneNumber}
          isLoggedInUser={!profileId && true}
        />
      )}
      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <PhoneForm profileId={profile._id} />
      </div> */}
      <div style={styles.goBack}>
        <BackButton />
      </div>

              {/* FOR TEAM SEARCH BELOW called it loadingB initially because loading was taken as a const already above */}
              {/* <div className="col-12 col-md-8 mb-3">
                        {loadingB ? (
                          <div>Loading...</div>
                        ) : (
                          <Teams
                            teams={teams}
                          />
                        )}
                      </div> */}

      <Footer />
    </div>
  );
};

export default Profile;

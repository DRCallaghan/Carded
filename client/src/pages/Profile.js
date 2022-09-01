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


const Profile = () => {
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

  if (!profile?.name) {
    return (
      <div className="flex-row justify-center">
        <Header />
        <div className="col-12 col-md-10 my-3"></div>
        <h4>
          Email or password not found! Use the navigation links above to sign up or log in!
        </h4>
      </div>
    );
  }

  const styles = {
    navbar:{
      alignItems: 'center'
    }
  }

  return (
    <div>
      <nav style={styles.navbar}>
        <SearchModal />
        <BackButton/>
        <Drop/>
      </nav>
      <div>
        <CardExample />
      </div>
      {profile.phoneNumber?.length > 0 && (
        <PhoneList
          phone={profile.phoneNumber}
          isLoggedInUser={!profileId && true}
        />
      )}
      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <PhoneForm profileId={profile._id} />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

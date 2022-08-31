import React from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import ProfileList from '../components/ProfileList';
import Carded from "../../public/carded.png";
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
      <div className="summary">
        summary section here
      </div>
      <div className="examples">
        examples sections here
          <img
              src={Carded}
              alt="card"
              class="card"
            />
            
            </div> 
        
      
      <div className="in-depth">
        in depth info here
      </div>
      <div className="management">
        management details here
        <p>eample text</p>
        <span>SPAN1</span><br/>
        <span>SPAN2</span>

      </div>
    </main>
  );
};

export default Home;

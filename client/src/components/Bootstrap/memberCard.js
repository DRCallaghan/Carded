import React from "react";
import Card from "react-bootstrap/Card";
import { FaLinkedin } from "react-icons/fa";
import Auth from '../../utils/auth';
//          BELOW TO RENDER DATA ON THE CARD
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROFILE, QUERY_ME, QUERY_SINGLE_TEAM } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Navigate } from "react-router-dom";



function MemberCard() {
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
      background: '#d7eaf3'
    },
    paddingStyle: {
      background: "#77b5d9",
      height: '.5vh',
      width: '100%',
      marginBottom: '18px'
    },
    memberCard: {
      position: 'relative',
      width: '22vw',
      height: '22vh',
      display: 'flex',
      flex: 'wrap'
    }
  }


  //          BELOW TO RENDER DATA ON THE CARD
  //     BASIC LOGIC IS SET UP - CURRENLTY WILL RENDER USER NAME AND ANY USER PROPERTY ATTACTHED IF IT IS PRESENT - ID, ADDRESS, TEAM ...  THIS IS NOT COMING OFF OF THE ADD A TEAM MEMBER MODAL HOWEVER.  IT CAN BE REFACTORED TO TAKE THAT INFO ONCE IT IS ACCESSIBLE, OR THAT INFO CAN BE REFACTGORED TO COME IN FROM ANOTHER SIGN UP AREA TO BE USED HERE...
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

  // parsing the team ID out of the
  const teamId = profile.team[0]._id;
  console.log(teamId);
  const teamData = useQuery(QUERY_SINGLE_TEAM,
    {
      variables: { teamId: teamId },
    }
  );

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/team" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (teamData.loading) {
    return <div>Loading...</div>;
  }

  // drilling into the teamData.data object to make future calls easy
  // to call team info, just use `team.name` or similar
  const team = teamData.data.team;
  console.log(team);

  // drilling into the manager object to make future calls easy
  // to call manager info, just use `manager.name` or similar
  const manager = team.manager;
  console.log(manager);

  // drilling into the members array to make future looping easy
  // to call a member, use `member[0].name` or similar
  const member = team.members;
  console.log(member);

  // return for the actual cards
  return (
    <div className=''>
      <div className=" cardManager">
        <Card style={{ width: "23rem" }}>
          <Card.Body>
            <Card.Title>Name: {manager.name}</Card.Title>
            <Card.Subtitle className="text-muted">Position: {manager.position}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Team: {team.name}</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Card.Link href="#">LinkedIn</Card.Link> */}
            <a style={{ fontSize: "2rem" }} href=" https://www.linkedin.com/in/pete-wang-SWE" target="blank">
              <FaLinkedin />
            </a>
          </Card.Body>
        </Card>
      </div>
      <div style={styles.paddingStyle}></div>
      <div className="cardParent">
      {member.map((el) => {
        return ( 
            <div className="cardMember">
              <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title>Name: {el.name}</Card.Title>
                  <Card.Subtitle className="text-muted">Position: {el.position}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Team: {team.name}</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  {/* <Card.Link href="#">LinkedIn</Card.Link> */}
                  <a style={{ fontSize: "2rem" }} href=" https://www.linkedin.com/in/pete-wang-SWE" target="blank">
                    <FaLinkedin />
                  </a>
                </Card.Body>
              </Card>
            </div>
         
        );
      })}
      </div>
    </div>
  );
}




// function MemberCard() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>Name</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Position</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         {/* <Card.Link href="#">LinkedIn</Card.Link> */}
//         <a style = {{fontSize: "2rem"}} href=" https://www.linkedin.com/in/pete-wang-SWE" target="blank">
//           <FaLinkedin />
//         </a>
//       </Card.Body>
//     </Card>
//   );
// }

export default MemberCard;

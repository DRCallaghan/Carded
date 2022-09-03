import React from "react";
import Card from "react-bootstrap/Card";
import { FaLinkedin } from "react-icons/fa";

//          BELOW TO RENDER DATA ON THE CARD
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';




function CardExample() {



  //          BELOW TO RENDER DATA ON THE CARD
//     BASIC LOGIC IS SET UP - CURRENLTY WILL RENDER USER NAME AND ANY USER PROPERTY ATTACTHED IF IT IS PRESENT - ID, ADDRESS, TEAM ...  THIS IS NOT COMING OFF OF THE ADD A TEAM MEMBER MODAL HOWEVER.  IT CAN BE REFACTORED TO TAKE THAT INFO ONCE IT IS ACCESSIBLE, OR THAT INFO CAN BE REFACTGORED TO COME IN FROM ANOTHER SIGN UP AREA TO BE USED HERE...

  const { profileId } = useParams();
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );
  console.log(data.me.team)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name: {data.me.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Position</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Team:</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Card.Link href="#">LinkedIn</Card.Link> */}
        <a style = {{fontSize: "2rem"}} href=" https://www.linkedin.com/in/pete-wang-SWE" target="blank">
          <FaLinkedin />
        </a>
      </Card.Body> 
    </Card>
  );
}




// function CardExample() {
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

export default CardExample;

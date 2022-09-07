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

  const { loading, data } = useQuery(
    QUERY_ME
  );
  console.log(data.me);

  if (data.me.team.length === 0) {
    return (
      <h4>Please create a team or have your manager add you to their team in order to see a business card.</h4>
    )
  };

  return (
    <div className="cardManager">
      <Card style={{ width: "23rem" }} className = "profileCard">
        <Card.Body style ={{border: "gold 1px solid", borderRadius: "22px"}}>
          <Card.Title>
            <h3>
              Name: {data.me.name}
            </h3>
          </Card.Title>
          <Card.Subtitle className="text-muted">
            <h4>
              Position: {data.me.position}
            </h4>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <h4>
              Team: {data.me.team[0].name}
            </h4>
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Card.Link href="#">LinkedIn</Card.Link> */}
          <a style={{ fontSize: "2rem", hover:{color:"white"} }} href=" https://www.linkedin.com/in/pete-wang-SWE" target="blank">
            <FaLinkedin />
          </a>
        </Card.Body>
      </Card>
    </div>
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

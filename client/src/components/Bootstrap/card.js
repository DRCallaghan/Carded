import React from "react";
import Card from "react-bootstrap/Card";
import { FaLinkedin } from "react-icons/fa";

function CardExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Position</Card.Subtitle>
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

export default CardExample;

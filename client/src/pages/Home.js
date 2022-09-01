import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import carded from "../images/carded.png";
import { QUERY_PROFILES } from "../utils/queries";

import "../index.css"

import Footer from "../components/Footer";


const Home = () => {
  const styles = {
    homeStyle: {
        
    },
  };


  return (
    <main style={styles.homeStyle}>
      <Header />
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        </div>
      </div>
      <div className="summary">
        <h2>summary section here</h2>
        <p>
          {" "}
          Carded is your online solution to creating teams of individuals based
          upon any grouping that fits your needs. <br />
          Teams can be used to organize, plan, or structure any business or
          social goal you may have - with business cards generated to represent
          your Teams.
        </p>
      </div>
      <div className="examples">
        <h2>examples sections here</h2>
      </div>
      <div className="card-example">
        <img src={carded} alt="card" class="card" />
        example card
      </div>
<div className="details">
      <h2>in depth info here</h2>
      <div className="in-depth">

        <p>1.  </p> 
        <p>2.  </p>
        <p>3.  </p>
      </div>
      <div className="in-depth-text">
      <p> Just Sign Up </p> 
        <p> Join Or Create A Team </p>
        <p> Build A Card. </p>
      </div>
      </div> 
      <div className="management">
        <h2>management details here</h2>
 

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Maxime, ratione. Qui quod, dolores,
          veritatis itaque voluptates quaerat odit laborum praesentium, neque
          provident reiciendis harum recusandae excepturi aliquam repellat
          laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Maxime, ratione. Qui quod, dolores,
          veritatis itaque voluptates quaerat odit laborum praesentium, neque
          provident reiciendis harum recusandae excepturi aliquam repellat
          laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Home;

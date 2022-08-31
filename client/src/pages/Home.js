import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import carded from "../images/carded.png";
import { QUERY_PROFILES } from "../utils/queries";
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
      <div className="summary"><h2>summary section here</h2></div>
      <div className="examples"><h2>examples sections here</h2></div>
      <div className="card-example">
        <img src={carded} alt="card" class="card" />
        example card
      </div>

      <div className="in-depth">in depth info here</div>
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
          excepturi aliquam repellat laboriosam facere.
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          ratione. Qui quod, dolores, veritatis itaque voluptates quaerat odit
          laborum praesentium, neque provident reiciendis harum recusandae
          excepturi aliquam repellat laboriosam facere.
        </p>
        
      </div>
    </main>
  );
};

export default Home;

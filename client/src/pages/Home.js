import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import carded1 from "../images/carded1.png";
import carded2 from "../images/carded2.png";
import carded3 from "../images/carded3.png";
import team from "../images/team.jpeg";
import handing from "../images/handing.jpeg";
import { QUERY_PROFILES } from "../utils/queries";
import "../index.css";
import Footer from "../components/Footer";


const Home = () => {
  const styles = {
    homeStyle: {},
  };

  return (
    <main style={styles.homeStyle}>
      <Header />
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3"></div>
      </div>

      <div className="summary">
        <div className="summary-text">
          <h4>
            Carded is your online solution to creating teams of individuals
            based upon any grouping that fits your needs.
          </h4>
        </div>
        <div className="summary1-pic">
          <img src={team} alt="card" class="card" />
        </div>
      </div>

      <div className="summary2">
        <div className="summary2-pic">
          <img src={handing} alt="card" class="card" />
        </div>

        <div className="summary-text2">
          <h4>
            Teams can be used to organize, plan, or structure any business or
            social goal you may have - with business cards generated to
            represent your Teams.
          </h4>
        </div>
      </div>

      <div className="examples">
        <div className="example1">
          <img src={carded1} alt="card" class="card" />
        </div>

        <div className="example2">
          <img src={carded2} alt="card" class="card" />
        </div>

        <div className="example3">
          <img src={carded3} alt="card" class="card" />
        </div>
      </div>

      <div className="details">
        <div className="in-depth">
          <p>1. </p>
          <p>2. </p>
          <p>3. </p>
        </div>

        <div className="in-depth-title">
          <p> Just Sign Up </p>
          <p> Join Or Create A Team </p>
          <p> Build A Card. </p>
        </div>
        
        <div className="in-depth-text">
          <p>Simply login or sign up to get started</p>
          <p>
            Once you are in you can join an existing group if you have an
            invitation from the team manager. No invitation? Thats ok, you can
            form your own team!
          </p>
          <p>
            Once you are apart of a team you will recieve a business card
            associated with that team, or you can design your own personal card
            if you started your won team.{" "}
          </p>
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

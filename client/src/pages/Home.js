import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import carded from "../images/carded.png";
import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
        </div>
      </div>
      <div className="flex-row justify-center card-example">
        <img src={carded} alt="card" class="card" />
      </div>
      <div className="flex-row justify-center summary">
        <h2>Welcome to Carded!</h2>
      </div>
      <div className="flex-row justify-center summary">
        <div className="col-12 col-md-8 text-center my-3">
          <p>Carded is a virtual business card solution that gives you control over how your business cards look both in-person and online. Carded brings your business cards to LinkedIn and your emails while fitting more information into them than ever before. With the flexibility our team management system brings and the ability to generate new business cards at the touch of a button, you'll always want to get Carded.</p>
        </div>
      </div>
      <div className="flex-row justify-center examples"><h2>examples sections here</h2></div>


      <div className="flex-row justify-center in-depth">in depth info here</div>
      <div className="flex-row justify-center management">
        <h2>management details here</h2>
        <div className="flex-row justify-center management">
          <div className="col-12 col-md-8 text-center my-3">
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
        </div>
      </div>
    </main>
  );
};

export default Home;

import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import carded1 from "../images/carded1.png";
import carded2 from "../images/carded2.png";
import carded3 from "../images/carded3.png";
import team from "../images/team.jpeg";
import handing from "../images/handing.jpeg";
import logo from "../images/logo.png";
import hand from "../images/hand.jpeg";
import { QUERY_PROFILES } from "../utils/queries";
import "../index.css";

import Footer from "../components/Footer";

import HomeFooter from "../components/Footer/homefoot";



const Home = () => {
  // const styles = {
  //   exampleStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  // };

  return (
    <main>
    {/* <main style={styles.homeStyle}> */}
      <Header/>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3"></div>
      </div>

      <div className="summary">

        <div className="summary-text">
          <h4 style={{lineHeight: "1.8"}}>
            Carded is your online solution to creating teams of individuals
            based upon any grouping that fits your needs.
          </h4>
        </div>
        <div className="summary1-pic">
          <img src={team} style={{maxWidth: "100%"}} alt="card" className="card" />
        </div>
      </div>

      <div className="summary2">
        <div className="summary2-pic">
          <img src={handing} style={{maxWidth: "100%"}} alt="card" className="card" />
        </div>

        <div className="summary-text2">
          <h4 style={{lineHeight: "1.8", maxHeight: "100%"}}>
            Teams can be used to organize, plan, or structure any business or
            social goal you may have - with business cards generated to
            represent your Teams.
          </h4>
        </div>
      </div>

      <div className="examples">
      
        <div className="example1">
          <img src={carded1} style={{maxWidth: "100%"}} alt="card" className="card" />
        </div>

        <div className="example2">
          <img src={carded2} style={{maxWidth: "100%"}} alt="card" className="card" />
        </div>

        <div className="example3">
          <img src={carded3} style={{maxWidth: "100%"}} alt="card" className="card" />
        </div>    
       
      </div>

      <div className="details">
        <div className="in-depth">
          <p>1 </p>
          <p>2 </p>      
        </div>

        <div className="in-depth-title">
          <p> Just Sign Up </p>
          <p> Join Or Create A Team </p>
         
        </div>
        
        <div className="in-depth-text">
          <p>Simply login or sign up to get started</p>
          <p>
            Once you are in, you can join an existing group if you have an
            invitation from the team manager. No invitation? Thats ok, you can
            form your own team!
          </p>
        </div>
      </div>

      <div class="profile-area">
        <div class="outer-circle">
        
          <span class="material-symbols-sharp">  <img src={logo} style ={{width:"225%", border:"none", backgroundColor:"white"}}  alt="card" className="card" /></span>
          <span class="material-symbols-sharp">  <img src={logo} style ={{width:"225%", border:"none", backgroundColor:"white"}}  alt="card" className="card" /></span>
          <span class="material-symbols-sharp">  <img src={logo} style ={{width:"225%", border:"none", backgroundColor:"white"}}  alt="card" className="card" /></span>
          <span class="material-symbols-sharp">  <img src={logo} style ={{width:"225%", border:"none", backgroundColor:"white"}}  alt="card" className="card" /></span>
        

        </div>
        <div class="inner-circle">
         
          <img src={hand} style = {{width: "100%"}} alt="card" className="card" />
        </div>
      </div>
    

      <div className="details">
        <div className="in-depth">
          <p>3 </p>
          <p>4 </p>
        </div>

        <div className="in-depth-title">
          <p> Build A Card </p>
          <p> Network </p>
        </div>
        
        <div className="in-depth-text">
          <p>
            Once you are apart of a team you will recieve a business card
            associated with that team, or you can design your own personal card
            if you started your won team.
          </p>
          <p>
            Now you can organize or expanding your team and network with other teams!
          </p>
        </div>
      </div>
      <div className="management">
       
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
      <HomeFooter/>
    </main>
  );
};



export default Home;

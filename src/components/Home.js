import React from "react";
import { useState } from "react";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

import bp5 from "../assest/bp_5.jpg"


function Home() {

  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Bahubali</h1>
          <p>Solution to all your Problem</p>
        </main>

      </div>
      <div className="home2" >
        <img src={bp5} alt="grapgics" />
        <div>
          <p>Solution to all your Problem
            Solution to all your Problem Solution to all your Problem</p>
        </div>
      </div>

      <div className="home3" id="about">

        <div>
          <h1>who we are?</h1>
          <p>
            Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem Solution to all your Problem
            Solution to all your Problem Solution to all your Problem
          </p>
        </div>
      </div>
      <div className="home4" id="brand">

        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>


    </>
  );
}


export default Home;

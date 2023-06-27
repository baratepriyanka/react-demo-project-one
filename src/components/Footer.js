import React from "react";
import {useState } from "react";

import bp5 from "../assest/bp_5.jpg"


function Footer() {
   
  return (

      <footer className="">
        <div>
          <h1>Bahubali </h1>
         <p> @all right reserved </p>
        </div>

        <div>
          <h5>Follow us</h5>
        <div>
            <a href="http://localhost:3000/#home" target={"blank"}>Youtube</a>
            <a href="http://localhost:3000/#home" target={"blank"}>Instagram</a>
            <a href="http://localhost:3000/#home" target={"blank"}>Github</a>
        </div>
        </div>
      </footer>
      
     


  );
}


export default Footer;

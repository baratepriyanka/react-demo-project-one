import React from "react";
import {useState } from "react";

import bp5 from "../assest/bp_5.jpg"


function About() {
  const ids = [1,2,3,4,5];
  let [studentsCount,setStudentsCount] = useState(0);
    const addStudent = () => {
      setStudentsCount(++studentsCount);
   }
  
   
  return (
    <>
      <div className="About">
        <main>
          <h1>Bahubali About</h1>
          <p>Solution to all your Problem</p>
        </main>

      </div>
     
    </>




  );
}


export default About;

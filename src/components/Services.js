import React from "react";
import { Carousel } from "react-responsive-carousel";
import Hacker from '../assest/hacker.jpg'
import Stack from '../assest/programming.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Services() {

  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
         <img  src={Hacker}  alt="item1"/>
         <p className="legend">Full Stack</p>
        </div>
        <div>
         <img  src={Stack}  alt="item3"/>
         <p className="legend">Full Stack1</p> 
        </div>

      </Carousel>
      
     
    </div>

  );
}


export default Services;

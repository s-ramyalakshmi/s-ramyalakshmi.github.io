import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage' color='#1a1322'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>RAMYALAKSHMI SUNDARAMOORTHY</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            {/* <br></br><br></br> */}
            I'm seeking opportunities that not only challenge me as a developer but also allow me to take pride in the work I contribute to.<br /><br />
            I am fluent in <b>Java, Python, C++, C.</b><br></br><br></br>
            I thrive in the cutting-edge realms of<b> Spring Boot, AWS.</b> <br /><br />
              I embrace the challenges of databases like
               <b className="purple"> MongoDB, PostgreSQL, and DynamoDB.</b>  
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
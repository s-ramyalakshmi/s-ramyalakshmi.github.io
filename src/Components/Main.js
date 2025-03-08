import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Skills from './Skills.js';
import Coder from '../LottieFiles/coder.json';
import Resume from "../Components/Resume";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div>
      <div id='home' className='HomePage' color='#1a1322'>
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

      <div id='about' style={{ padding: '15px' }}>
        <div className='AboutPage'>
        <div className='AboutText'>
        <div>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Ramya</b>,
            a <b>Software Developer</b> with 4 years experience in Java, Spring Boot, AWS, and Databases. I recently graduated with <b>MS in Computer Science</b> from Arizona State University. <br/><br/>

            I am fluent in <b>Java, Python, Microservices, </b><b>Spring Boot, AWS.</b> and Databases
            <b className="purple"> (PostgreSQL, MySQL, MongoDB, DynamoDB, and Neo4j auraDB).</b> <br/><br/>

            Previously, I led backend development and AWS optimizations, driving cost and performance improvements. I built secure Java Spring Boot applications with OAuth2 and JWT.
            <br></br><br></br> Open to <b> collaborations and new opportunities </b>  —connect with me via the links in the footer!<br/>
            <br></br>Beyond coding, I love to sing.<br/>
          </p>
         </div>
         </div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        
        </div>

      </div>
      <div></div>
     <div id = 'skills' style={{ padding: '15px' }}>
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Java' />
        <Skills skill='Aws' />
        <Skills skill='Postgresql' />
        <Skills skill='MongoDb' />
        <Skills skill='Python' />
        <Skills skill='Docker' />
        <Skills skill='Elasticsearch' />
        <Skills skill='Github' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Jenkins' />
        <Skills skill='Android'/>
        <Skills skill='Javascript' />
        <Skills skill='Node' />
        <Skills skill='React' />
      </div>
    </div>
    
    <Projects />
    <Resume />
    
    </div>
  );
}

export default Home;

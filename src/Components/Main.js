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
            Hello, my name is <b>Ramya</b> and I am from Chennai, India.
            I'm a <b>Java backend developer</b> and pursuing <b>MS in Computer Science</b>. <br/><br/>

            I am fluent in <b>Java, Python, C++, C.</b> I thrive in the cutting-edge realms of <b>Spring Boot, AWS.</b>
            I embrace the challenges of databases like
            <b className="purple"> MongoDB, PostgreSQL, and DynamoDB.</b> <br/><br/>
            In my past role as a <b> software engineer</b>, I led the backend team, improved system efficiency, managed the database lifecycle, and received recognition for cost-saving implementations.
            <br></br><br></br>I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Besides coding, I love to sing.<br/>
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

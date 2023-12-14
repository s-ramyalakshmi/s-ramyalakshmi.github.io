import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Ramya</b> and I am from Chennai, India.
            I'm a <b>Java backend developer</b> and pursuing <b>MS in CSE</b>. <br/><br/>
            In my past role as a <b> software engineer</b>, I led the backend team, improved system efficiency, managed the database lifecycle, and received recognition for cost-saving implementations.
            <br></br><br></br>I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Besides coding, I love to sing.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
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
        
      </div>
    </>
  )
}

export default About
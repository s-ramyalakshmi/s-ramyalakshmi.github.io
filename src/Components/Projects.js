import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectName="ContentSwift" />
        <ProjectBox projectName="SpringBootKafka" />
        <ProjectBox projectName="BeTheBestYou" />
        <ProjectBox projectName="CovidSymptomsMonitor" />
        <ProjectBox projectName="SentimentAnalysis" />
        <ProjectBox projectName="WebScrapping" />
      </div>

    </div>
  )
}

export default Projects
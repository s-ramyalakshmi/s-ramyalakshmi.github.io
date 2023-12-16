import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectName}) => {
  const desc = {
    ContentSwiftDesc : "A Distributed database system for a content deliery network ContentSwift using PostgreSQL, MongoDB, Python, and Docker.",
    ContentSwiftGithub : "https://github.com/s-ramyalakshmi/DropTable",

    BeTheBestYouDesc : "A Guardian Angel Android app is a holistic well-being solution, combining physical health, mental health, and personal goals, featuring anomaly detection, recommendations for nearby medical facilities, and emergency contact initiation in critical situations.",
    BeTheBestYouGithub : "https://github.com/s-ramyalakshmi/MC-BeTheBestYou",

    CovidSymptomsMonitorDesc:"A Covid symptoms monitoring app which evaluates heart rate and respiratory rate.",
    CovidSymptomsMonitorGithub:"https://github.com/s-ramyalakshmi/DiaShield-MobileApp",
    
    SentimentAnalysisDesc:"A Sentiment analysis tool build using Python, Tensorflow, NLTK, Numpy",
    SentimentAnalysisGithub:"https://github.com/s-ramyalakshmi/SentimentAnalysis",

    WebScrappingDesc:"A web scrapping tool which collects symptoms of diseases from the health websites using Python, BeautifulSoup, googlesearch",
    WebScrappingGithub:"https://github.com/s-ramyalakshmi/Scrapping"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a> 
        </div>
    </div>
  )
}

export default  ProjectBox
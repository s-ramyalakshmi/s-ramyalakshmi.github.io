import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaJava, FaPython, FaGithub, FaAws, FaAndroid, FaJenkins, FaDocker} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiMongodb, SiPostman, SiPostgresql, SiElasticsearch} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        Java: <FaJava/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Python : <FaPython/>,
        MongoDb : <SiMongodb/>,
        Android : <FaAndroid/>,
        Github : <FaGithub/>,
        Aws : <FaAws/>,
        Jenkins : <FaJenkins/>,
        Docker: <FaDocker/>,
        Postgresql : <SiPostgresql/>,
        Elasticsearch : <SiElasticsearch/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

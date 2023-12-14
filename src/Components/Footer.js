import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ramyalakshmi Sundaramoorthy</h4>
      <h4>Copyright &copy; 2023 RS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/s-ramyalakshmi" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ramyalakshmi-s/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:ramy12797@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/rsunda/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './footer.css'

import cvlogo from "../../assets/cv.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

import cv from "../../assets/CV.pdf"
const Footer = () => {
  return (
    <footer className='footer'>

    
        <a href = {cv} target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i>  <FontAwesomeIcon icon={faFile} size='3x' /></a>
        <a href = "https://github.com/sahityasakthivel?tab=repositories" target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i>  <FontAwesomeIcon icon={faGithub} size='3x'/></a>
        <a href = "https://www.linkedin.com/in/sahitya-sakthivel-08299a213/" target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i>  <FontAwesomeIcon icon={faLinkedin} size='3x'/></a>
    </footer>
  );
}

export default Footer
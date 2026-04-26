import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Lateef Kassim</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/abdullateef-kassim-4a4b83263" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href="https://github.com/Lateefk" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="mailto:lateefconcept@gmail.com"><FaEnvelope /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lateef Kassim. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
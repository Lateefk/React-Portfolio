import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/abdullateef-kassim-4a4b83263" target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href="https://github.com/Lateefk" target='_blank' rel='noreferrer'><FaGithub /></a>

    </div>
  )
}

export default HeaderSocials
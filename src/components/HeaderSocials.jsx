import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="#" target='_blank'><FaLinkedin/></a>
        <a href="#" target='_blank'><FaGithub /></a>
        <a href="#" target='_blank'><SiIndeed/></a>

    </div>
  )
}

export default HeaderSocials
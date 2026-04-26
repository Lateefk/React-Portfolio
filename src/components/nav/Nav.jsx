import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { RiServiceLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActivenav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={()=> setActivenav('#home')} className={activeNav === '#home' ? 'active' : '' }><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActivenav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActivenav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><SiBookstack /></a>
      <a href="#services" onClick={()=> setActivenav('#services')} className={activeNav === '#services' ? 'active' : '' }><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><FaRegMessage /></a>
    </nav>

  )
}

export default Nav
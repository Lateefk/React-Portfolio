import React from 'react'
import './Header.css'
import CTA from '../CTA'
import Me from '../../assets/llp.png'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lateef Kassim</h1>
        <h5 className="text-light">Full Stack Developer || Mobile App Developer|| <br /> Blockchain Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="mee">
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header;
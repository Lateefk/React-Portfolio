import React from 'react'
import { publicPath } from '../../lib/publicPath'
import CTA from '../CTA'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Lateef Kassim</h1>
        <h5 className="text-light">Full Stack Developer || Mobile App Developer|| <br /> Blockchain Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="mee">
          <img src={publicPath('/assets/lateef.jpeg')} alt="Lateef Kassim" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header;
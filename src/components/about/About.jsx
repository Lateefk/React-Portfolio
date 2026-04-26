import React from 'react'
import { publicPath } from '../../lib/publicPath'
import { FaAward } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={publicPath('/assets/lateef.jpeg')} alt="Lateef Kassim" />
          </div>
          
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
            <FaUserFriends className='about__icon'/>
              <h5>Clients</h5>
              <small>12+</small>
            </article>

            <article className='about__card'>
            <MdFolderCopy className='about__icon'/>
              <h5>Projects</h5>
              <small>18+</small>
            </article>
          </div>

          <p>
            I am a full-stack developer focused on building scalable web and mobile products that solve real business problems.
            I work across React, Node.js, APIs, and databases to deliver fast, reliable, and user-friendly applications from
            planning to production. I enjoy turning complex product requirements into clean technical solutions while maintaining
            high standards for performance, accessibility, and code quality.
          </p>

              <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>

        

      </div>
     </div>
    </section>
  )
}

export default About
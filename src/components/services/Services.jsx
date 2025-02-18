import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Blockchain Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Skilled in dApps, smart contracts, and Ethereum/Solidity.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Creating efficient, scalable blockchain solutions.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Collaborating with clients and teams for custom solutions.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Optimizing blockchain protocols for performance.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Optimizing blockchain protocols for performance.</p>

            </li>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Passionate about exploring new blockchain use cases and technologies.</p>

            </li>
          
          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Expertise in front-end (HTML, CSS, JavaScript) and back-end (Node.js,databases) technologies.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Skilled in troubleshooting issues and optimizing web performance.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Ensuring pixel-perfect design, seamless functionality, and bug-free experiences.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Creating intuitive, responsive, and accessible websites for all users.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Collaborating clearly with clients, designers, and teams to meet project goals.</p>

            </li>

           
          </ul>
        </article>

        {/* EMD OF WEB DEVELOPEMENT */}


        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Skilled in mobile development platforms (iOS, Android), and programming languages (Swift, React Native).</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Efficient at tackling challenges and optimizing app performance.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Focused on delivering smooth, bug-free, and visually appealing apps.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Strong collaboration with teams and clients to ensure successful outcomes.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Always up-to-date with the latest trends and tools in mobile development.</p>

            </li>

      
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services
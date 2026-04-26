import React from 'react'
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>Solutions I Deliver</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Blockchain & Web3 Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Production-ready smart contracts and dApps built with Solidity and modern Web3 tooling.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Secure contract architecture, gas-aware optimization, and practical on-chain/off-chain integration.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Wallet connection, transaction flows, and user-friendly blockchain onboarding for non-technical users.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Clear documentation and maintainable codebases that teams can scale confidently after launch.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Collaboration across product, design, and engineering to deliver measurable business outcomes.</p>

            </li>
          
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>High-performance web apps with React, Node.js, Express, and scalable data models.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>API-first architecture with clean REST endpoints, authentication, and role-based access control.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Responsive and accessible interfaces that maintain quality across devices and browsers.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Performance tuning, debugging, and reliability improvements for faster load and better retention.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>End-to-end delivery from planning to deployment with maintainable, testable code.</p>

            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Cross-platform mobile apps with React Native focused on smooth UX and reliable performance.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Reusable component architecture, state management, and API integration for maintainable apps.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Authentication, notifications, and offline-friendly flows for real-world user scenarios.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Store-ready releases with debugging, QA support, and iterative feature delivery.</p>

            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Close collaboration with stakeholders to align product goals, timelines, and quality standards.</p>

            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
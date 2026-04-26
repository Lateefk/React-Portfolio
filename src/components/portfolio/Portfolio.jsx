import React from 'react'
import { publicPath } from '../../lib/publicPath'

const data = [
  {
    id: 1,
    image: '/assets/nixven-site.png',
    title: 'Nixven',
    category: 'Lead Capture & Qualification Platform',
    summary:
      'Built for visa agents and study-abroad consultants to capture, qualify, and route serious applicants before the first call.',
    highlights: [
      'Built a structured intake flow capturing destination, budget, documents, and relocation timeline.',
      'Unified web, agent links, and email into one lead pipeline for cleaner consultant handoff.',
      'Designed to reduce unqualified enquiries and improve consult-booking conversion through pre-screening.',
      'Early-access traction includes 1,000+ inquiry records and cross-country agency usage.',
    ],
    github: null,
    demo: 'https://nixven.com',
    privateRepoNote: 'Private repository - architecture walkthrough and code samples available on request.',
  },
  {
    id: 2,
    image: '/assets/latbridge-site.png',
    title: 'Latbridge',
    category: 'AI-Powered Real Estate Platform',
    summary:
      'An AI real estate platform for faster property discovery and smarter buyer-agent matching.',
    highlights: [
      'Delivered AI-powered property discovery with personalized recommendation workflows.',
      'Implemented verified listing experience and direct buyer-to-agent connection paths.',
      'Integrated market insight features to support faster and better investment decisions.',
      'Platform positions include 10,000+ listings, 5,000+ users, and 500+ verified agents.',
    ],
    github: null,
    demo: 'https://latbridge.com',
    privateRepoNote: 'Private repository - architecture walkthrough and code samples available on request.',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, category, summary, highlights, github, demo, privateRepoNote }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={publicPath(image)} alt={title} loading="lazy" decoding="async" />
              </div>

              <h3>{title}</h3>
              <p className='portfolio__item-category'>{category}</p>
              <p className='portfolio__item-summary'>{summary}</p>
              <ul className='portfolio__item-highlights'>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className='portfolio__item-private-note'>{privateRepoNote}</p>

              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>
                    Github
                  </a>
                )}
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                  Live Site
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
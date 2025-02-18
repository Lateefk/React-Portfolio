import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/port1.avif'
import IMG2 from '../../assets/port2.avif'
import IMG3 from '../../assets/port3.avif'
import IMG4 from '../../assets/port4.avif'
import IMG5 from '../../assets/port5.avif'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard and financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21955497-Chart-widgets-library-Hyper-charts-UI-Kit'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard and financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22331472-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard and financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/24216788-Figma-dashboard-UI-kit'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard and financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21955497-Chart-widgets-library-Hyper-charts-UI-Kit'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard and financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21955497-Chart-widgets-library-Hyper-charts-UI-Kit'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image"></div>

          <img src={image} alt={title} />
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
            )
          })
        }
        
   
      </div>
    </section> 
  )
}

export default Portfolio
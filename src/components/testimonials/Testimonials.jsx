import React from 'react'

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



const data = [
  {
    avatarTone: 'avatar--indigo',
    name: "Musty Shehu",
    review: "I recently worked with Lateef on an e-commerce web app, and the results exceeded my expectations. The site is sleek, user-friendly, and performs flawlessly. Lateef was professional, responsive, and truly understood my needs. My customers love the ease of navigation, and I couldn't be happier with the final product. Highly recommend!",
  },

  {
    avatarTone: 'avatar--gold',
    name: "Amina Okafor",
    review: "I’m beyond impressed with the mobile app Lateef Kassim developed for us. The app is sleek, user-friendly, and runs smoothly on both iOS and Android. Lateef took the time to understand our needs and delivered exactly what we envisioned. The attention to detail and the seamless user experience exceeded our expectations. Highly recommend Lateef for anyone looking to create a high-quality, custom mobile app",
  },

  {
    avatarTone: 'avatar--teal',
    name: "Kwame Mensah",
    review: "Lateef built an outstanding web app for us. The design is modern, the interface is easy to navigate, and the performance is top-notch. Lateef listened to our needs and delivered a solution that fits perfectly with our goals. We’re extremely happy with the result and would highly recommend them for any web development project!",
  },

  {
    avatarTone: 'avatar--purple',
    name: "Zinhle Dlamini",
    review: "You did a fantastic job on our web app. The site is visually appealing, responsive, and easy to use. professional design, communicated well throughout the process, and delivered a product that exceeded our expectations. Highly recommended!",
  },
]

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
       // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
    
      
      >
        
        {
          data.map(({avatarTone, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className={`client__avatar ${avatarTone || ''}`}>
            <span className='client__avatar-fallback'>{getInitials(name)}</span>
          </div>

          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
       
       </Swiper>
    </section>
  )
}

export default Testimonials
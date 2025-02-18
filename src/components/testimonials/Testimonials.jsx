import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avat1.jpeg'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'
import AVTR4 from '../../assets/avatar1.avif'

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Musty Shehu",
    review: "I recently worked with Lateef on an e-commerce web app, and the results exceeded my expectations. The site is sleek, user-friendly, and performs flawlessly. Lateef was professional, responsive, and truly understood my needs. My customers love the ease of navigation, and I couldn't be happier with the final product. Highly recommend!",
  },

  {
    avatar: AVTR2,
    name: "Tina Show",
    review: "I’m beyond impressed with the mobile app Lateef Kassim developed for us. The app is sleek, user-friendly, and runs smoothly on both iOS and Android. Lateef took the time to understand our needs and delivered exactly what we envisioned. The attention to detail and the seamless user experience exceeded our expectations. Highly recommend Lateef for anyone looking to create a high-quality, custom mobile app",
  },

  {
    avatar: AVTR3,
    name: "Maruthi Sangh",
    review: "Lateef built an outstanding web app for us. The design is modern, the interface is easy to navigate, and the performance is top-notch. Lateef listened to our needs and delivered a solution that fits perfectly with our goals. We’re extremely happy with the result and would highly recommend them for any web development project!",
  },

  {
    avatar: AVTR4,
    name: "Alex Bann",
    review: "You did a fantastic job on our web app. The site is visually appealing, responsive, and easy to use. professional design, communicated well throughout the process, and delivered a product that exceeded our expectations. Highly recommended!",
  },
]

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
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
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
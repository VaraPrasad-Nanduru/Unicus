import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/deepak-das.png"
            name="Deepak Das"
            company="Bengaluru"
            testimony={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/santosh.png"
            name="Santosh"
            company="Bengaluru"
            testimony={`We're genuinely impressed by your company's dedication and the reliability of your product. It has been a game-changer for our business.`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/chhaya.png"
            name="Chhaya"
            company="Hyderabad"
            testimony={`I'm so glad I chose this beautiful Lippan art created by the Fine Art Interiors team.
The craftsmanship is exceptional - even after two years, it still looks brand new with minimal
upkeep. Truly a stunning piece!
"`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList

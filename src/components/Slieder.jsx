import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Slieder = () => {
  return (
    <>
        <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-full '
    >
      <SwiperSlide className='w-3/6'><img className='h-[40vh] w-full rounded-lg' src="../../public/sllideCar1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='w-3/6'><img className='h-[40vh] w-full rounded-lg' src="../../public/slide5.png" alt="" /></SwiperSlide>
      <SwiperSlide className='w-3/6'><img className='h-[40vh] w-full rounded-lg' src="../../public/sliderCar3.png" alt="" /></SwiperSlide>
      <SwiperSlide className='w-3/6'><img className='h-[40vh] w-full rounded-lg' src="../../public/slideCar4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='w-3/6'><img className='h-[40vh] w-full rounded-lg' src="../../public/sllideCar1.jpg" alt="" /></SwiperSlide>
    </Swiper>
    </>
)
}

export default Slieder
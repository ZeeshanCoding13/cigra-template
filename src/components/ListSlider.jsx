import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../App.css'


const ListSlider = () => {
  return (
    <>
        <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-full flex flex-col lg:flex-row justify-between  text-[16px] pt-5 swiper-text'
    >
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Kwaliteitsgarantie</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Deskundig advie</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Transparant</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Gemakkelijke financiering</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Transparant</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Gemakkelijke financiering</SwiperSlide>
      <SwiperSlide className=''><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</SwiperSlide>
    
    </Swiper>
    </>
)
}

export default ListSlider
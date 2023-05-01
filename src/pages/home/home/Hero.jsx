 import React, { useRef, useState } from "react";
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
 import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';

 import travelPlace1 from '../../../assets/Rectangle-1.jpg'
 import travelPlace2 from '../../../assets/Rectangle-2.png'
 import travelPlace3 from '../../../assets/Rectangle-3.png'
 import travelPlace4 from '../../../assets/Rectangle-4.png'

const Hero = () => {
  
  return (
 <div className='hero-area'>
        <div className='container mx-auto'>
            <div className='grid h-screen items-center grid-cols-3 gap-10'>
                <div className='col-span-1'>
                    <h1 className='text-white text-5xl font-bold mb-3'>Cox's bazar</h1>
                    <p className='text-white text-base font-normal mb-4'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    <button className=' text-white bg-[#F9A51A] border-0 font-medium px-8 py-2 rounded-md'>Booking</button>
                </div>
                <div className="col-span-2">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace1} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace2} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace3} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace4} alt="" /></SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Hero
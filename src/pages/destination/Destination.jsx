import React from 'react'

const Destination = () => {


  return (
    <div  className='hero-area'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-10 pt-40'>
                <div className='col-span-1'>
                    <h1 className='text-white text-5xl font-bold mb-3'>Cox's bazar</h1>
                    <p className='text-white text-base font-normal mb-4'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    <button className=' text-white bg-[#F9A51A] border-0 font-medium px-8 py-2 rounded-md hover:bg-black duration-300'>Booking</button>
                </div>
                <div className="col-span-2">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination
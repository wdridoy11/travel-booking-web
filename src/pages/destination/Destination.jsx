import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import "./rangePicker.css"
import { Link } from 'react-router-dom';
const Destination = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div  className='hero-area'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-20 pt-40'>
                <div>
                    <h1 className='text-white text-5xl font-bold mb-3'>Cox's bazar</h1>
                    <p className='text-white text-base font-normal mb-4'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    <button className=' text-white bg-[#F9A51A] border-0 font-medium px-8 py-2 rounded-md hover:bg-black duration-300'>Booking</button>
                </div>
                <div>
                  <div className='bg-white rounded-lg p-10'>
                      <div className="form-control">
                          <label className="label">
                            <span className="label-text text-base font-medium">Origin</span>
                          </label>
                          <input type="text" placeholder="Dhaka" className="input input-bordered mb-2" readOnly/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                            <span className="label-text text-base font-medium">Destination</span>
                          </label>
                          <input type="text" placeholder="Cox’s Bazar" className="input input-bordered mb-2"/>
                      </div>
                      <div>
                          <label className="label">
                            <span className="label-text text-base font-medium">Booking Date</span>
                          </label>
                          <DateRangePicker onChange={onChange} value={value} />
                      </div>
                    <Link className='text-base block font-medium bg-[#F9A51A] text-black mt-3 px-4 py-3 text-center rounded-md'>Start Booking</Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination
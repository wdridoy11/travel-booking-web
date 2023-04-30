import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SingleNewDetails = () => {
  const singleNews=useLoaderData();
  const {img,title,description,article}=singleNews;
  return (
    <div>
      <div>
          <img className='w-full h-screen object-cover' src={img} alt="" />
          <div className='container mx-auto py-20'>
              <h3 className='text-2xl text-black font-medium mb-2'>{title}</h3>
              <p className='text-base text-slate-700 font-medium mt-5'>{description}</p>
              <p className='text-base text-slate-700 font-medium mt-5'>{article}</p>
          </div>
          <Link>Go to back</Link>
      </div>
    </div>
  )
}

export default SingleNewDetails
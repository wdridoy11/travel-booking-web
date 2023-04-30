import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleNew from './SingleNew';

const News = () => {
const news=useLoaderData();
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-7'>
                {news.map((singleNews)=><SingleNew key={singleNews.id} singleNews={singleNews}></SingleNew>)}
            </div>
        </div>
    </div>
  )
}

export default News
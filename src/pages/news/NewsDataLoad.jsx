import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsDisplay from './NewsDisplay';

const NewsDataLoad = () => {
const newsData = useLoaderData();
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-7'>
                {newsData.map((news)=><NewsDisplay key={news.id} news={news}></NewsDisplay>)}
            </div>
        </div>
    </div>
  )
}

export default NewsDataLoad
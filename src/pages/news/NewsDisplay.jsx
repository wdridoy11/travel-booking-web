import React from 'react'
import { Link } from 'react-router-dom';

const NewsDisplay = (props) => {
    const {id,img,title,description}=props.news;
  return (
    <div>
        <div>
            <div className='glass'>
                <img className='w-full h-80' src={img} alt="" />
                <div className=' p-5'>
                    <h3 className='text-xl text-black font-medium mb-2'>{title.length <30 ? <>{title}</>:<>{title.slice(0,45)}...</>}</h3>
                    <p className='text-black mb-3'>{description < 100 ? <>{description}</>:<>{description.slice(0,100)}...</>}</p>
                    <Link className='text-black font-medium' to={`/news/${id}`}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDisplay
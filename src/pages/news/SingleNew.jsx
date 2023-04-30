import React from 'react'
import { Link } from 'react-router-dom';

const SingleNews = (props) => {
    const {id,img,title,description}=props.singleNews;
  return (
    <div>
        <div>
            <div className='glass'>
                <img className='w-full h-80' src={img} alt="" />
                <div className=' p-5'>
                    <h3 className='text-xl text-black font-medium mb-2'>{title.length <30 ? <>{title}</>:<>{title.slice(0,45)}...</>}</h3>
                    <p className='text-black'>{description < 100 ? <>{description}</>:<>{description.slice(0,100)}...</>}</p>
                    <Link className='text-black mt-2 font-medium' to={`/news/${id}`}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleNews
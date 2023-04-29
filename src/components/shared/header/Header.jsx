import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className='py-5'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src={Logo} alt="" />
                </div>
                <div className='flex gap-6 items-center'>
                    <Link className='text-base font-medium' to={`/`}>Home</Link>
                    <Link className='text-base font-medium' to={`/`}>News</Link>
                    <Link className='text-base font-medium' to={`/`}>Destination</Link>
                    <Link className='text-base font-medium' to={`/`}>Blog</Link>
                    <Link className='text-base font-medium' to={`/`}>Contact</Link>
                    <Link className='text-base font-medium bg-[#F9A51A] text-black px-4 py-1 rounded-md' to={`/`}>Login</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header
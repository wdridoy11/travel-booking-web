import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;

const Registration = () => {
  return (
    <div className='w-full items-center pt-12'>
    <div className='container mx-auto'>
        <div>
            <div className='border border-[#ddd] p-12 md:w-1/2 mx-auto rounded-lg'>
                <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
                <form>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="text" name='first-name' id='first-name' placeholder='First Name' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="text" name='last-name' id='last-name' placeholder='Last Name' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="password" name="password" id="password" placeholder='password' required/>
                    <input className='w-full border-b border-[#ddd] mb-5 pb-2 text-base outline-none' type="password" name="confrim-password" id="confrim-password" placeholder='confrim password' required/>
                    <div className='flex justify-between'>
                        <input type="checkbox" name="checkbox" id="checkbox"  value="Remember Me"/>
                        <Link className='text-[#F9A51A] text-base font-medium'>Forgot Password</Link>
                    </div>
                    <button className='btn text-white bg-[#F9A51A] w-full border-0 rounded-none mt-10 mb-4'>Create an account</button>
                    <p className='text-center text-base font-medium'>Already have an account? <Link to={`/login`} className='text-[#F9A51A]'>Login</Link></p>
                </form>
            </div>
            <div className='md:w-1/2 lg:w-1/3 mx-auto mt-6'>
                <div className='flex items-center justify-center border border-[#ddd] py-3 px-2 rounded-full mb-3 relative cursor-pointer'>
                    <p className='absolute top-1.5 left-2 text-4xl text-[#1877F2]'><FaFacebook></FaFacebook></p>
                    <p className='text-base font-medium text-black'>Continue with Facebook</p>
                </div>
                <div className='flex items-center justify-center border border-[#ddd] py-3 px-2 rounded-full mb-3 relative cursor-pointer'>
                    <p className='absolute top-1.5 left-2 text-4xl text-[#1877F2]'><img className='w-9' src={googleIcon} alt="" /></p>
                    <p className='text-base font-medium text-black'>Continue with Google</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Registration
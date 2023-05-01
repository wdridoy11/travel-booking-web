import React from 'react'

const Contact = () => {

    const handleContact=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const phone = form.tel.value;
        const textarea = form.mesage.value;
        console.log(name,email,subject,phone,textarea);
    }

  return (
    <div>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-center mt-16 mb-4'>Contact Us</h1>
            <form onSubmit={handleContact} className='md:w-1/2 mx-auto'>
                <input className='form-control border w-full p-3 mb-2 outline-none focus:ring-1 ring-green-300' type="text" name='name' id='name' placeholder='Enter your name' required />
                <input className='form-control border w-full p-3 mb-2 outline-none focus:ring-1 ring-green-300' type="email" name="email" id="email" placeholder='Enter your email' required/>
                <input className='form-control border w-full p-3 mb-2 outline-none focus:ring-1 ring-green-300' type="text" name='subject' id='subject' placeholder='Subject' required />
                <input className='form-control border w-full p-3 mb-2 outline-none focus:ring-1 ring-green-300' type="tel" name="tel" id="tel" placeholder='Enter you phone' required/>
                <textarea className='form-control border w-full p-3 mb-2 outline-none focus:ring-1 ring-green-300' name="message" id="mesage" cols="30" rows="5"></textarea>
                <button className='btn px-10 bg-[#F9A51A] border-0 text-black hover:text-white duration-500 mt-3'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#142b33] text-[#eff3f3] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f8c09c74-fe6f-4434-bd9a-b610536eb333" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-rose-600 '>Contact</p>
                <p className=' py-4'>Submit the form below or shoot me an email - nmnayana62@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 font-bold text-black outline-none rounded' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6] font-bold text-black outline-none rounded' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] font-bold p-2 text-black  outline-none rounded' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 duration-300 hover:bg-rose-600 hover:border-rose-600 px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
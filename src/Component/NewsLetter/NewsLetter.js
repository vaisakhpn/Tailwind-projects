import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[40px]'>
            <div className='m-3' >
                <h1 className='text-[30px] md:text-[40px] font-bold text-white ' >Want to make Projects?</h1>
                <span className=' text-[15px] md:text-[20px] font-bold text-white'>
                    Sign up to newsletter
                </span>
                </div>
            <div className='my-[20px] m-3'>
            <input type='text' className='sm:w-full p-3 mr-2 mb-2 text-slate-800 rounded ' placeholder="Email"/>
            <button className=' bg-black text-white p-3  rounded'>Notify me</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
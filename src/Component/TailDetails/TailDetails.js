import React from 'react'
import laptop from '../../assets/laptop.jpg'
const TailDetails = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 ' >
        <div className=' col-span-1 w-[80%] flex justify-end'>
            <img src={laptop} alt="laptop" className='h-[400px]' />
        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] text-2xl font-bold my-2'>Tailwind</h1>
            <p className='my-2 text-justify'>
            Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override 
            </p>
            <button className='w-[30%] bg-black text-white p-3 rounded'>Get Start</button>
        </div>
    </div>
  )
}

export default TailDetails
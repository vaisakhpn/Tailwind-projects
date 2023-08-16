import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
        <div className='text-2xl md:text-3xl font-bold p-[10px] md:p-[24px]'>
            Tail wind
        </div>
        <h2 className='text-white font-bold text-5xl p-[10px] md:p-[24px] md:text-[70px]'>
            Sample Project
        </h2>
        <div className='md:text-[50px] text-[30px] md:p-[24px] p-[10px] text-white font-bold'>
            Tail Wind
            <Typed 
            className='p-3'
                strings={[
                    'Projects',
                    'Samples'
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop ={true}>
                   
                </Typed>
        </div>
        </div>


    </div>
  )
}

export default Banner
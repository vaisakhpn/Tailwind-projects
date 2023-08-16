import React from 'react'
import laptop from '../../assets/laptop.jpg'
const Plans = () => {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px]  mx-auto md:grid grid-cols-4 gap-6'>
        <div className='shadow-xl h-[400px] my-4 hover:scale-105 duration-500'>
            <h1 className='text-[35px] font-bold text-center my-2'>Project 1</h1>
            <div className=' w-full flex justify-center'>
            <img src={laptop} alt="laptop" className='h-[150px] w-full' />
            </div>
            <div className='flex justify-center '>
                 <span className='font-bold text-justify my-4 mx-7'>sdcdcbijsndcl,sldckcskdclscld scsdcsnjdc sdcbjsckm sckdjbk</span>
             </div>
        </div>
        <div className='shadow-xl h-[400px] my-4 bg-gray-100 hover:scale-105 duration-500'>
            <h1 className='text-[35px] font-bold text-center my-2'> Project 2</h1>
            <div className=' w-full flex justify-center'>
            <img src={laptop} alt="laptop" className='h-[150px] w-full' />
            </div>
            <div className='flex justify-center '>
                 <span className='font-bold text-justify my-4 mx-7'>sdcdcbijsndcl,sldckcskdclscld scsdcsnjdc sdcbjsckm sckdjbk</span>
             </div>
        </div>
        <div className='shadow-xl h-[400px] my-4 hover:scale-105 duration-500'>
            <h1 className='text-[35px] font-bold text-center my-2'>Project 3</h1>
            <div className=' w-full flex justify-center'>
            <img src={laptop} alt="laptop" className='h-[150px] w-full' />
            </div>
            <div className='flex justify-center '>
                 <span className='font-bold text-justify my-4 mx-7'>sdcdcbijsndcl,sldckcskdclscld scsdcsnjdc sdcbjsckm sckdjbk</span>
             </div>
        </div>
        <div className='shadow-xl h-[400px] my-4  bg-gray-100 hover:scale-105 duration-500'>
            <h1 className='text-[35px] font-bold text-center my-2'>Project 4</h1>
            <div className=' w-full flex justify-center'>
            <img src={laptop} alt="laptop" className='h-[150px] w-full' />
            </div>
            <div className='flex justify-center '>
                 <span className='font-bold text-justify my-4 mx-7'>sdcdcbijsndcl,sldckcskdclscld scsdcsnjdc sdcbjsckm sckdjbk</span>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Plans
import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-slate-50 rounded-xl p-5 xl:py-8 xl:px-8'>
      {/* Text */}
      <div className='flex flex-col items-center justify-center'>
        <p className='font-medium text-lg py-4'>Testimonial</p>
        <p className='font-bold text-3xl lg:text-5xl pt-1 xl:pt-3'>Voices of Success: Stories from Our</p>
        <p className='font-bold text-3xl lg:text-5xl'>Community</p>  
      </div>
       {/* Cards  */}
      <div className='flex items-center justify-center w-full pt-10 space-x-2 xl:space-x-5'>
        <Card1/>
        <Card2/>
      </div>
    </div>
  )
}

export default Testimonial

const Card1 = () => {
  return (
    <div className='w-1/2 min-h-[30vh] bg-slate-200 rounded-xl' >

    </div>
  )
}

const Card2 = () => {
  return (
    <div className='w-1/2 min-h-[30vh] bg-indigo-200 rounded-xl' >
      
    </div>
  )
}
